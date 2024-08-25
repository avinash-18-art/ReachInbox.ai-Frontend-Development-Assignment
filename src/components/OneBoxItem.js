import React from 'react'

const OneBoxItem = ({item, onDelete, onReply}) => {
  const handleKeyDown = event => {
    if (event.key === 'D' || event.key === 'd') {
      onDelete(item.id)
    } else if (event.key === 'R' || event.key === 'r') {
      onReply(item.id)
    }
  }

  return (
    <div
      className="onebox-item p-4 border-b border-gray-200 flex justify-between items-center"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div>
        <h3 className="text-lg font-bold">{item.subject}</h3>
        <p className="text-gray-600">{item.body}</p>
      </div>
      <div className="flex space-x-2">
        <button
          className="text-red-500 hover:underline"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => onReply(item.id)}
        >
          Reply
        </button>
      </div>
    </div>
  )
}

export default OneBoxItem
