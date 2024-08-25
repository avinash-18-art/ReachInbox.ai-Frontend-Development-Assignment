import React, { useState } from 'react';
import CustomTextEditor from './CustomTextEditor';
import axios from 'axios';

const ReplyBox = ({ threadId, onClose }) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const replyData = {
      from: 'user@example.com', // Replace with actual sender's email
      to: 'recipient@example.com', // Replace with actual recipient's email
      subject,
      body
    };
    
    axios.post(`/api/reply/${threadId}`, replyData)
      .then(response => {
        console.log('Reply sent:', response.data);
        onClose(); // Close the reply box after successful submission
      })
      .catch(error => {
        console.error('Error sending reply:', error);
      });
  };

  return (
    <div className="reply-box bg-white shadow-lg p-4 rounded">
      <h3 className="text-lg font-bold mb-4">Reply</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <CustomTextEditor value={body} onChange={setBody} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Send
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ReplyBox;
