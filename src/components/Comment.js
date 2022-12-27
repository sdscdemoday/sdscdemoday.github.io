import { useEffect, useState } from "react";

const Comment = (props) => {

    const [comments, setComments] = useState(props.comments);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [count, setCount] = useState(0);

    const onSubmitClick = e => {

        const newComments = comments?.slice() || [];
        newComments.push({name: name, comment: comment});
        setComments(newComments);

        // Reset input fields
        setComment("");
        setCount(0);

        e.preventDefault();
    }

    const onCommentChange = e => {
        let value = e.target.value;
        let count = 0;
    
        // Match all non-whitespace
        if ((value.match(/\S+/g)) != null) {
            count = value.match(/\S+/g).length;
        }
    
        if (count > 200) {
            // Split the string on first 200 words and rejoin on spaces
            value = value.split(/\s+/, 200).join(" ");
            count = 200;
        }

        setComment(value);
        setCount(count);
    }

    return (
        <>
            <h2>Comments</h2>
            {
                comments.reverse().map((c,i) => <p key={i}><b>{c.name ? c.name : "Anonymous"}: </b>{c.comment}</p>)
            }

            <form className="row g-3" action="" method="GET" id="frmComment" noValidate>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="txtUser">Name: </label>
                    <input className="form-control" type="text" name="name" id="txtUser"
                        placeholder="Anonymous" maxLength="200" onChange={e => setName(e.target.value)} value={name} required />
                    <small className="text-danger d-none validate hidden"></small>
                </div>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="txtComment">
                        Comment (<span id="wordCount" className={count > 150 ? "text-danger" : ""}>{count}</span> of 200 Word limit): 
                    </label>
                    <textarea className="form-control" id="txtDescription" value={comment} onChange={onCommentChange}></textarea>
                    <small className="text-danger d-none validate hidden"></small>
                </div>
                <div className="col-12 text-end center">
                    <input id="btnSubmit" className="btn btn-primary" type="submit" value="Submit" onClick={onSubmitClick} disabled={!comment} />
                </div>
            </form>
        </>
    );
}

export default Comment;
