import React from 'react';
import './foodGallery.css';
import './../index.css';
import Modal from 'react-modal';
import { color, motion } from 'framer-motion';

import f1 from '../assets/food/food1.png';
import f2 from '../assets/food/food2.png';
import f3 from '../assets/food/food3.png';
import f4 from '../assets/food/food4.png';
import f5 from '../assets/food/food5.png';
import f6 from '../assets/food/food6.png';
import f7 from '../assets/food/food7.png';
import f8 from '../assets/food/food8.png';
import f9 from '../assets/food/food9.png';
import f10 from '../assets/food/food10.png';
import f11 from '../assets/food/food11.png';



const FoodGallery: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className='hero'>
            <div className='foodgallery'>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    contentLabel="Note Modal"
                    className="note-modal"
                    overlayClassName="note-overlay"
                >
                    <motion.div
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: 90, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="note-card"
                    >
                        <div className="close-icon" onClick={closeModal}>
                            ✖
                        </div>
                        <h2>Honey Jalepeno Sesame Chicken </h2>
                        <div className='recipe-grid'>
                            <div>
                                <h3>The Chicken</h3>
                                <p>• 1 1/2 lbs Chicken Thighs</p>
                                <p>• 2 eggs (Beaten) </p>
                                <p>• 1 cup cornstarch</p>
                                <p>• Salt & pepper</p>
                            </div>
                            <div>
                                <h3>The Sauce</h3>
                                <p>• 4 minced fresh garlic</p>
                                <p>• 3 Sliced Jalapenos</p>
                                <p>• 1/4 cup honey</p>
                                <p>• 1/4 cup soy sauce</p>
                                <p>• 2 tablespoons ketchup</p>
                                <p>• 3 tablespoons brown sugar</p>
                                <p>• 2 tablespoons rice vinegar</p>
                                <p>• 1 tablespoon toasted sesame oil</p>
                                <p>• 2 tablespoons sesame seeds</p>
                                <p>• 2 tablespoons sliced green onions</p>
                            </div>
                        </div>
                    </motion.div>
                </Modal>

                <img src={f1 }onClick={openModal} alt='' className='foodimg'></img>
                <img src={f2} alt='' className='foodimg'></img>
                <img src={f3} alt='' className='foodimg'></img>
                <img src={f4} alt='' className='foodimg'></img>
                <img src={f5} alt='' className='foodimg'></img>
                <img src={f6} alt='' className='foodimg'></img>
                <img src={f7} alt='' className='foodimg'></img>
                <img src={f8} alt='' className='foodimg'></img>
                <img src={f9} alt='' className='foodimg'></img>
                <img src={f10} alt='' className='foodimg'></img>
                <img src={f11} alt='' className='foodimg'></img>
            </div>
        </div>
    );
    
};

export default FoodGallery;