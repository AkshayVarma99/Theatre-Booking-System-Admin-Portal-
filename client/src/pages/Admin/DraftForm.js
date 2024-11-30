import React from 'react';
import { Col, Form, message, Modal, Row, Button as AntButton, Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import { AddMovieShow, UpdateDraftMovieShow, EditDraftMovieShowCheckDone } from '../../apicalls/movieshows';
import Button from "../../components/Button";
import moment from 'moment';

function DraftForm({
    displayMovieShowFormModal,
    setDisplayMovieShowFormModal,
    currentSelectedMovieShow,
    setCurrentSelectedMovieShow,
    getDataDraft,
    formType,
    currentEditedMovieShow,
    setCurrentEditedMovieShow,
}) {
    const dispatch = useDispatch();

    const handleEditDone = async (movieID) => {
        try {
            dispatch(ShowLoading());
            const response = await EditDraftMovieShowCheckDone({ movieID });
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
        }
    };

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response = null;

            if (formType === "add") {
                response = await AddMovieShow(values);
            } else {
                response = await UpdateDraftMovieShow({
                    ...values,
                    draftmovieID: currentSelectedMovieShow._id
                });
            }
            
            if (response.success) {
                getDataDraft();
                message.success(response.message);
                setDisplayMovieShowFormModal(false);
            } else {
                message.error(response.error);
            }
            
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <Modal
            title={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1 className="modal-title">{formType === "add" ? "ADD SHOW" : "EDIT SHOW"}</h1></div>}
            visible={displayMovieShowFormModal}
            onCancel={() => {
                setDisplayMovieShowFormModal(false);
                setCurrentSelectedMovieShow(null);
                if (formType === "edit") {
                    handleEditDone(currentEditedMovieShow);
                }
            }}
            footer={null}
            width={800}
        >
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={currentSelectedMovieShow}
                className="Form-section"
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Name of the Movie" name="title" rules={[{ required: true, message: 'Please enter name of the movie' }]}>
                            <input type="text" placeholder="Enter movie title" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter movie description' }]}>
                            <textarea placeholder="Describe the movie" rows={4} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Form.Item label="Duration" name="duration" rules={[{ required: true, message: 'Please enter movie duration' }]}>
                            <input type="number" placeholder="Duration (in minutes)" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Form.Item label="Genre" name="genre" rules={[{ required: true, message: 'Please select movie genre' }]}>
                            <select placeholder="Select a genre">
                                <option disabled value="">Select Genre</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-fi">Sci-fi</option>
                            </select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select date' }]}>
                            <input type="date" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Form.Item label="Time" name="time" rules={[{ required: true, message: 'Please select time' }]}>
                            <input type="time" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Form.Item label="Price (€)" name="price" rules={[{ required: true, message: 'Please enter price' }]}>
                            <input type="number" placeholder="Ticket price in euros" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Tooltip title="Number of available tickets">
                            <Form.Item label="Availability" name="tickets" rules={[{ required: true, message: 'Please enter number of tickets available' }]}>
                                <input type="number" placeholder="Available tickets" />
                            </Form.Item>
                        </Tooltip>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Poster URL" name="posterUrl">
                            <input type="text" placeholder="http://" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="flex justify-end" style={{ marginTop: '20px', gap: '10px' }}>
                    <Button title="Cancel" variant="outlined" type="button" onClick={() => { setDisplayMovieShowFormModal(false); setCurrentSelectedMovieShow(null); if (formType === "edit") { handleEditDone(currentEditedMovieShow); } }} />
                    <Button title="Save Show" type="submit" onClick={() => { if (formType === "edit") { handleEditDone(currentEditedMovieShow); } }} />
                </div>
            </Form>
        </Modal>
    );
}

export default DraftForm;
