import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import postPledge from "../api/post-createpledge";


function CreatePledgeForm() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const { id } = useParams();

    const [pledge, setPledge] = useState({
        amount: null,
        comment: "",
        anonymous:false,
        project: id,
        supporter: userId,       
    });
    const handleChange = (event) => {
        console.log(pledge)
        const { id, value } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token");
        if (authToken) {
            event.preventDefault();
            console.log(pledge)
            postPledge(pledge).then(response => {
                console.log(response)
                navigate("/")
            });
        }
    };
    
            return (
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="amount"> Insert pledge amount: </label>
                    <input 
                        type="number"
                        id="amount"
                        placeholder="Insert pledge amount"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="comment"> Insert pledge comment: </label>
                    <input 
                        type="text"
                        id="comment"
                        placeholder="Insert pledge comment"
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label htmlFor="is_anonymous">Anonymous</label>
                    <input
                        type="checkbox"
                        id="isAnonymous"
                        value={pledge.anonymous}
                        onChange={handleChange}
                    />
                    </div>

                    <button type="submit">
                        Create Pledge 
                    </button>
                </form>
            );

        }
    


export default CreatePledgeForm; 