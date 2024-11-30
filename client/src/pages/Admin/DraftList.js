import React, { useEffect, useState,  } from 'react'
import Button from '../../components/Button'
import DraftForm from './DraftForm';
 
import moment  from "moment";
import { message, Table } from 'antd';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import { DeleteDraftMovieShow, GetAllDraftMovieShows, PublishDraftMovieShow,EditDraftMovieShowCheck } from '../../apicalls/movieshows';

 
 
import { Input } from 'antd';
 
function DraftList() {
    const { Search } = Input;
 
    const [draftShows, setDraftShows]= React.useState([]);  
    const [displayMovieShowFormModal,setDisplayMovieShowFormModal]= React.useState(false);
    const [currentSelectedMovieShow,setCurrentSelectedMovieShow]=React.useState(null);
    const [currentEditedMovieShow,setCurrentEditedMovieShow]=React.useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
 
// selcted genres for filtering
    const [selectedGenre, setSelectedGenre] = useState(null);
    const[draftOriginalMovieShowList,setdraftOriginalMovieShowList]=React.useState([]);
    const[formType,setFormType]=React.useState("add");
   
 
// dispatch
    const dispatch=useDispatch();
 
 
   
// function for on search when movie is searched
    function onSearch(value) {
 
        // filtering the orginal movie list based on the value from search
        const filteredData = draftOriginalMovieShowList.filter(
          (movie) =>
            movie.title.toLowerCase().includes(value.toLowerCase())
        );
        // setting draftShows to that for display
        setDraftShows(filteredData);
      }
   
 
 
// to get draft data, draft movie list.
    const getDataDraft= async(genre)=>{
        try{
            dispatch(ShowLoading());
            const response=await GetAllDraftMovieShows();
            setdraftOriginalMovieShowList(response.data);
 
            if(response.success){
 
                let filteredMovies = response.data;
                if (genre) {
                  filteredMovies = filteredMovies.filter((movie) => movie.genre === genre);
                }
                setDraftShows(filteredMovies);
            }else{
                message.error(response.message);
            }
            dispatch(HideLoading());
        }catch(error){
            dispatch(HideLoading());
            message.error(error.message);
        }
    };
   
 
  // function to handle delete
    const handleDelete = async (movieID) => {
        if (confirmDelete) {
            try {
                // if delete is confirmed
            dispatch(ShowLoading());
 
            // call DeleteDraftMovieShow ande delete the movie
            const response = await DeleteDraftMovieShow({
                movieID,
            });
            if (response.success) {
                message.success(response.message);
                getDataDraft();
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
            } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }}
        else {
            // Show the confirmation message
            setConfirmDelete(true);
            setRecordToDelete(movieID);
        }
    };
 
 

 
// function to handlePublish
const handlePublish =async(movieID)=>{
    try{
        // show loading
        dispatch(ShowLoading());
        // call PublishDraftMovieShow
        const response =await PublishDraftMovieShow({
            movieID,
        });
        if(response.success){
            message.success(response.message);
            getDataDraft();
        }else {
            message.error(response.message);
        }
        dispatch(HideLoading());
    }catch(error){
        dispatch(HideLoading());
        message.error(error.message);
    }
};
 
 
// handle edit function
const handleEdit =async(movieID)=>{
    try{
        dispatch(ShowLoading());
 
        // checking if it is being edited by someone else
        const response =await EditDraftMovieShowCheck({
            movieID,
        });
        if(response.success){
 
            // if not being edited then
            message.success(response.message);
            getDataDraft();
           
            setFormType("edit");
            setDisplayMovieShowFormModal(true);
           
 
        }else {
            message.error(response.message);
        }
        dispatch(HideLoading());
    }catch(error){
        dispatch(HideLoading());
        message.error(error.message);
    }
};
 
 
    const columns=[
        // {
        //     title: 'Poster',
        //     dataIndex: 'poster',
        //     width: '5%',

        //     render: (text) => <img src={text} alt="Poster" style={{ width: 100 }} />, // Assuming `poster` contains the URL of the image
        //     // You may need to adjust the dataIndex and rendering logic based on your data structure
        // },
        {
            title:"Name",
            dataIndex:"title",
            width: '25%',

            sorter: (a, b) => a.title.localeCompare(b.title), sortDirections: ['ascend', 'descend']
        },
 
        {
            title:"Description",
            dataIndex:"description",
            width: '20%',
            sorter: (a, b) => a.description.localeCompare(b.description), sortDirections: ['ascend', 'descend'],
            render: (text) => <div style={{ maxHeight: "110px", overflowY: "auto",textAlign: "justify",paddingRight:"10px" }}>{text}</div>
        },
        
        // {
        //     title: 'Cast',
        //     dataIndex: 'cast',
        //     width: '15%',

        //     sorter: (a, b) => a.cast.localeCompare(b.cast),

        // },

        {
            title:"Duration (minutes)",
            dataIndex:"duration",
            width: '10%',
            sorter: (a, b) => a.duration - b.duration, sortDirections: ['ascend', 'descend']
        },
 
        {
            title: 'Genre',
            dataIndex: 'genre',
            width:'10%',

            sorter: (a, b) => a.genre.localeCompare(b.genre),

            // for filtering based on genre
            filters: [
              { text: 'Action', value: 'Action' },
              { text: 'Drama', value: 'Drama' },
              { text: 'Comedy', value: 'Comedy' },
              { text: 'Sci-fi', value: 'Sci-fi' },
              { text: 'Horror', value: 'Horror' },
              { text: 'Romance', value: 'Romance' },
            ],
            onFilter: (value, record) => record.genre === value,
          },
 
        {
            title:"Date",
            dataIndex:"date",
            width:'10%',
            sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(), sortDirections: ['ascend', 'descend'], render:(text,record)=>
            { return moment(record.date).format("DD-MM-YYYY");}
   
        },
 
        {
            title:"Time",
            dataIndex:"time",
            width:'10%',

            sorter: (a, b) => a.time.localeCompare(b.time), sortDirections: ['ascend', 'descend']
        },
 
        {
            title:"Price",
            dataIndex:"price",
            width:'10%',

            sorter: (a, b) => a.price - b.price,  sortDirections: ['ascend', 'descend']
        },
 
        {
            title:"Tickets",
            dataIndex:"tickets",
            sorter: (a, b) => a.tickets - b.tickets,
            sortDirections: ['ascend', 'descend']
        },
 
 
       
        {
            title:"Publish",
            dataIndex:"action",
            render:(text,record)=>{
                return <Button title="Publish" variant="publish" type="button"  onClick={()=>{
                    // on click call handelPublish to publish movie
                    handlePublish(record._id);}}></Button>
            }
        },
 
        {
            title:"Action",
            dataIndex:"action",
            width:'15%',

            render:(text,record)=>{
                return <div className="flex gap-2">
                    <i className="cursor-pointer ri-delete-bin-2-line text-white text-2xl p-0.5px 3px rounded-md bg-red-500 hover:bg-red-600 hover:text-white" title="Delete"
                       onClick={() => {
                        setConfirmDelete(true);
                        setRecordToDelete(record._id);
                        // for deleting
                    }} ></i>
 
 
                    {confirmDelete && recordToDelete === record._id && (
                        <div className="fixed top-0 left-10 w-full h-full  flex items-center justify-center">
                            <div className="dialog-box rounded-md p-1 text-md text-white">
                                <p>Are you sure you want to delete this item?</p>
                                <div className="mt-1 flex justify-end">
                                    <button  className="bg-red-500 text-white p-0.8 rounded-md mr-2"
                                    onClick={() => setConfirmDelete(false)}>
                                    Cancel
                                    </button>
 
                                    <button  className="bg-primary text-white p-0.5 rounded-md"
                                    onClick={() => {
                                        handleDelete(record._id);
                                        setConfirmDelete(false);
                                    }} >
                                    Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
 
 
                    <i className="cursor-pointer ri-pencil-line text-white text-2xl p-0.5 rounded-md bg-gray-100 bg-primary hover:text-white " title="Edit"
                    onClick={()=>{
                        // for edit
                        setCurrentSelectedMovieShow(record);
                        setCurrentEditedMovieShow(record._id);
                        handleEdit(record._id);
                    }}></i>
               
                </div>
            }
        }
       
    ]
 
    useEffect(() => {
        getDataDraft(selectedGenre);
    }, [selectedGenre]);

    return (
        <div>
            <div className='flex justify-between items-center mt-4 mb-1 font-sans text-lg'>
            <div className="flex gap-2 items-center">
        <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{ width: 300 }}
        />
        <Button
            title="Cancel Search"
            variant="outlined"
            onClick={() => onSearch('')}
            style={{ padding: '8px 16px' }} 
        />
    </div>
    <Button
        title="+ Add Movie Show"
        variant='outlined'
        onClick={() => {
            setDisplayMovieShowFormModal(true);
            setFormType("add");
        }}
        style={{ padding: '8px 16px' }} 
    />
</div>

            <div style={{ overflowX: 'scroll', maxWidth: '100%' }}>
                <Table className="table-bordered mt-4" columns={columns} dataSource={draftShows} />
            </div>
            {displayMovieShowFormModal && (
                <DraftForm
                    displayMovieShowFormModal={displayMovieShowFormModal}
                    setDisplayMovieShowFormModal={setDisplayMovieShowFormModal}
                    currentSelectedMovieShow={currentSelectedMovieShow}
                    setCurrentSelectedMovieShow={setCurrentSelectedMovieShow}
                    currentEditedMovieShow={currentEditedMovieShow}
                    setCurrentEditedMovieShow={setCurrentEditedMovieShow}
                    formType={formType}
                    getDataDraft={getDataDraft}
                />
            )}
        </div>
    );
}

export default DraftList;