import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';

const MealModal = ({ meals, setMeals, currentUser }) => {
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
        const mealData = {
            user_id: currentUser.id,
            img: imgUrl,
            meal_name: mealName,
            prep_time: prepTime
        }

        if (mealData.meal_name.length) {

            fetch('http://localhost:3001/meals/new', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(mealData)
            })
                .then(res => res.json())
                .then(newMeal => {
                    setMeals((meals) => [...meals, newMeal]);
                    setAddedMsg(`Success! ${newMeal.meal_name} added to list.`);
            })
                .catch(err => {
                    setAddedMsg("Uh oh! Something went wrong. Please try again");
                    console.log(err);
                })

            setMealName('');
            setPrepTime('');
            setImgUrl('');}
            
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