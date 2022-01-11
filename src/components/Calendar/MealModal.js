import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';

const MealModal = ({ meals, setMeals, setUnusedMeals }) => {
    const [show, setShow] = useState(false);
    const [mealName, setMealName] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [addedMsg, setAddedMsg] = useState('');
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false)
        setAddedMsg('')
    };

    const addMealHandler = () => {
        const mealIds = meals.map(meal => meal.id);
        const newMealId = Math.max(...mealIds) + 1
        const newMeal = {
            id: newMealId,
            img: imgUrl,
            name: mealName,
            time: prepTime
        }

        if (newMeal.name.length) {setMeals((meals) => [...meals, newMeal]);
        setUnusedMeals((unusedMeals) => [...unusedMeals, newMeal]);
        setMealName('');
        setPrepTime('');
        setImgUrl('');}
        setAddedMsg(`Success! ${newMeal.name} added to list.`);
    };

    return (
        <div className="meal-modal">
            <Button variant="outline-dark" size="lg" onClick={handleShow}>Add new meal</Button>

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
                    <p>{addedMsg}</p>
                    <Button variant="dark" onClick={addMealHandler}>Add meal</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MealModal