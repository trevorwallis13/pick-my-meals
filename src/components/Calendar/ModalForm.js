import React from 'react'
import Form from 'react-bootstrap/Form';

const ModalForm = ({ mealName, setMealName, prepTime, setPrepTime, imgUrl, setImgUrl }) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Meal name</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Your favorite meal"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="https://unsplash.com/example-food-photo.jpg"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Prep time</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="1 hr 30 min"
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default ModalForm
