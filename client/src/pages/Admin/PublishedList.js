

// import React, { useEffect, useState } from 'react'
// import Button from '../../components/Button'
// import moment  from "moment";
// import { message, Table } from 'antd';
// import { useDispatch } from 'react-redux';
// import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
// import { DeleteDraftMovieShow, DraftPublishedMovieShow, GetAllDraftMovieShows, GetAllPublishMovieShows, PublishDraftMovieShow } from '../../apicalls/movieshows';

// import { Input } from 'antd';



// // very similar to draft list

// function PublishedList() {

//   // creating state variables
//     // array holds list of published movies, setPublishedMovieShows is used to update
//     const [publishedMovieShows, setPublishedMovieShows]= React.useState([]);

//     // selcted genres for filtering

//     const [selectedGenre, setSelectedGenre] = useState(null);

//      //search component from antd
//     const { Search } = Input;

//       // holds the original published movie list
//     const[publishOriginalMovieShowsList,setpublishOriginalMovieShowList]=React.useState([]); 

//     const dispatch=useDispatch();

// // function for on search when movie is searched
//     function onSearch(value) {

      
//       const filteredData = publishOriginalMovieShowsList.filter(
//         (movie) =>
//           movie.title.toLowerCase().includes(value.toLowerCase()) 
//       );
//       setPublishedMovieShows(filteredData);
//     }


// // to get publish data, publish movie list.
//     const getDataPub= async(genre)=>{
//       try{
//          //show loading
//           dispatch(ShowLoading());

//           // call  GetAllPublishMovieShows
//           const response=await GetAllPublishMovieShows();
//           // original list
//           setpublishOriginalMovieShowList(response.data);
//           if(response.success){
//               let filteredMovies = response.data;
//               if (genre) {
//                  // if genre is passed then filter
//                 filteredMovies = filteredMovies.filter((movie) => movie.genre === genre);
//               }
//               setPublishedMovieShows(filteredMovies);
//           }else{
//               message.error(response.message);
//           }
//           dispatch(HideLoading());
//       }catch(error){
//           dispatch(HideLoading());
//           message.error(error.message);
//       }
//   };
  


// // to handle publish

// const hanldeDraft =async(movieID)=>{
//     try{
//         dispatch(ShowLoading());
//         // call DraftPublishedMovieShow
//         const response =await DraftPublishedMovieShow({
//             movieID,
//         });
//         if(response.success){
//             message.success(response.message);
//             getDataPub();
//         }else {
//             message.error(response.message);
//         }
//         dispatch(HideLoading());
//     }catch(error){
//         dispatch(HideLoading());
//         message.error(error.message);
//     }
// };

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'title',
//       // for sorting
//       sorter: (a, b) => a.title.localeCompare(b.title),
//     },
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       width: '40%',
//       sorter: (a, b) => a.description.localeCompare(b.description),
//       render: (text) => <div style={{ maxHeight: "110px", overflowY: "auto",textAlign: "justify",paddingRight:"10px"  }}>{text}</div>
//     },
//     {
//       title: 'Duration (minutes)',
//       dataIndex: 'duration',
//       width: '06%',
//       sorter: (a, b) => a.duration - b.duration,
//     },
//     {
//       title: 'Genre',
//       dataIndex: 'genre',
//       sorter: (a, b) => a.genre.localeCompare(b.genre),
//       // for filtering
//       filters: [
//         { text: 'Action', value: 'Action' },
//         { text: 'Drama', value: 'Drama' },
//         { text: 'Comedy', value: 'Comedy' },
//         { text: 'Sci-fi', value: 'Sci-fi' },
//         { text: 'Horror', value: 'Horror' },
//         { text: 'Romance', value: 'Romance' },
//       ],
//       onFilter: (value, record) => record.genre === value,
//     },
    
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       sorter: (a, b) => moment(a.date).diff(b.date),
//       width:'08%',
//       render: (text, record) => {
//         return moment(record.date).format('DD-MM-YYYY');
//       },
//     },
//     {
//       title: 'Time',
//       dataIndex: 'time',
//       sorter: (a, b) => a.time.localeCompare(b.time),
//     },
//     {
//       title: 'Price',
//       dataIndex: 'price',
//       sorter: (a, b) => a.price - b.price,
//     },
//     {
//       title: 'Tickets',
//       dataIndex: 'tickets',
//       sorter: (a, b) => a.tickets - b.tickets,
//     },
//     {
//       title: 'Draft',
//       dataIndex: 'action',
//       render: (text, record) => {
//         return (
//           <Button
//             title='Draft'
//             variant='Draft'
//             type='button'
//             onClick={() => {

//               // on click draft it
//               hanldeDraft(record._id);
//             }}
//           ></Button>
//         );
//       },
//     },
//   ];

//   useEffect(()=>{
//     getDataPub(selectedGenre);
// },[selectedGenre]);






// return (





//     <div>



// <div className=" search-container inline-flex items-center mb-1">
//   <Search
//     placeholder="Search"
//     onSearch={onSearch}
//     style={{ flex: 1, marginLeft: "2px" }}
//   />



// <div className='SearchCancel-button'>
// <Button
//     title="Cancel Search"
//     variant="cancelSearch"
//     size="xsmall"
    
//     onClick={() => {
//       onSearch('');
//     }}
//     style={{ margin: "0 0 0 0px" }}
//   />
// </div>
// </div>


    
//     <div style={{ overflowX: 'scroll', maxWidth: '100%' }}>
//     <Table  className="table-bordered" columns={columns} dataSource={publishedMovieShows}/>
//     </div>

//     </div>
//   )
// }





// export default PublishedList



import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import moment  from "moment";
import { message, Table } from 'antd';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import { DeleteDraftMovieShow, DraftPublishedMovieShow, GetAllDraftMovieShows, GetAllPublishMovieShows, PublishDraftMovieShow } from '../../apicalls/movieshows';

import { Input } from 'antd';



// very similar to draft list

function PublishedList() {

  // creating state variables
    // array holds list of published movies, setPublishedMovieShows is used to update
    const [publishedMovieShows, setPublishedMovieShows]= React.useState([]);

    // selcted genres for filtering

    const [selectedGenre, setSelectedGenre] = useState(null);

     //search component from antd
    const { Search } = Input;

      // holds the original published movie list
    const[publishOriginalMovieShowsList,setpublishOriginalMovieShowList]=React.useState([]); 

    const dispatch=useDispatch();

// function for on search when movie is searched
    function onSearch(value) {

      
      const filteredData = publishOriginalMovieShowsList.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase()) 
      );
      setPublishedMovieShows(filteredData);
    }


// to get publish data, publish movie list.
    const getDataPub= async(genre)=>{
      try{
         //show loading
          dispatch(ShowLoading());

          // call  GetAllPublishMovieShows
          const response=await GetAllPublishMovieShows();
          // original list
          setpublishOriginalMovieShowList(response.data);
          if(response.success){
              let filteredMovies = response.data;
              if (genre) {
                 // if genre is passed then filter
                filteredMovies = filteredMovies.filter((movie) => movie.genre === genre);
              }
              setPublishedMovieShows(filteredMovies);
          }else{
              message.error(response.message);
          }
          dispatch(HideLoading());
      }catch(error){
          dispatch(HideLoading());
          message.error(error.message);
      }
  };
  


// to handle publish

const hanldeDraft =async(movieID)=>{
    try{
        dispatch(ShowLoading());
        // call DraftPublishedMovieShow
        const response =await DraftPublishedMovieShow({
            movieID,
        });
        if(response.success){
            message.success(response.message);
            getDataPub();
        }else {
            message.error(response.message);
        }
        dispatch(HideLoading());
    }catch(error){
        dispatch(HideLoading());
        message.error(error.message);
    }
};

const columns = [

//   {
//     title: 'Poster',
//     dataIndex: 'poster',
//     width: '8%',

//     render: (text, record) => <img src={record.poster} alt="Poster" style={{ maxWidth: '100px' }} />,
// },
    {
      title: 'Name',
      dataIndex: 'title',
      width: '15%',

      // for sorting
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '20%',
      sorter: (a, b) => a.description.localeCompare(b.description),
      render: (text) => <div style={{ maxHeight: "110px", overflowY: "auto",textAlign: "justify",paddingRight:"10px"  }}>{text}</div>
    },

    
  // {
  //     title: 'Cast',
  //     dataIndex: 'cast',
  //     width: '20%',

  // },
    {
      title: 'Duration (minutes)',
      dataIndex: 'duration',
      width: '06%',
      sorter: (a, b) => a.duration - b.duration,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      sorter: (a, b) => a.genre.localeCompare(b.genre),
      // for filtering
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
      title: 'Date',
      dataIndex: 'date',
      sorter: (a, b) => moment(a.date).diff(b.date),
      width:'08%',
      render: (text, record) => {
        return moment(record.date).format('DD-MM-YYYY');
      },
    },
    {
      title: 'Time',
      dataIndex: 'time',
      sorter: (a, b) => a.time.localeCompare(b.time),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Tickets',
      dataIndex: 'tickets',
      sorter: (a, b) => a.tickets - b.tickets,
    },
    {
      title: 'Draft',
      dataIndex: 'action',
      render: (text, record) => {
        return (
          <Button
            title='Draft'
            variant='Draft'
            type='button'
            onClick={() => {

              // on click draft it
              hanldeDraft(record._id);
            }}
          ></Button>
        );
      },
    },
  ];

  useEffect(()=>{
    getDataPub(selectedGenre);
},[selectedGenre]);






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
              style={{ padding: '8px 16px' }}  // Ensure consistent padding
          />
      </div>
      
  </div>
  <div style={{ overflowX: 'scroll', maxWidth: '100%' }}>
      <Table className="table-bordered mt-4" columns={columns} dataSource={publishedMovieShows} />
  </div>
</div>
)
}





export default PublishedList