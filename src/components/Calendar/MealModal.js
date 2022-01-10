import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';

const MealModal = ({ meals, setMeals, setUnusedMeals }) => {
    const [show, setShow] = useState(false);
    const [mealName, setMealName] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addMealHandler = () => {
        const mealIds = meals.map(meal => meal.id);
        const newMealId = Math.max(...mealIds) + 1
        const newMeal = {
            id: newMealId,
            img: imgUrl,
            name: mealName,
            time: prepTime
        }

        setMeals((meals) => [...meals, newMeal]);
        setUnusedMeals((unusedMeals) => [...unusedMeals, newMeal]);
        setMealName('');
        setPrepTime('');
        setImgUrl('');
    };

    return (
        <div>
            <button onClick={handleShow}>Add new meal</button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a new meal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalForm 
                        mealName={mealName}
                        setMealName={setMealName}
                        prepTime={prepTime}
                        setPrepTime={setPrepTime}
                        imgUrl={imgUrl}
                        setImgUrl={setImgUrl}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={addMealHandler}>Add meal</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MealModal