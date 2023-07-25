import React from "react"

const Field = ({field , cancelBtn, saveBtn}) => {
    return (
    <div className={`p-2 bg-white border shadow rounded w-ful mx-[auto] my-[15px] `}>
            <div className="flex justify-between items-center text-[10px]">
                <input 
                    type="search" 
                    className="w-full bg-gray-100 rounded p-1 mr-2 border focus:outline-none focus:border-blue-500" 
                    placeholder={field.title}
                    ref={field.element}
                />

                <div className="flex justify-center items-center space-x-2">
                    <button 
                        type="button"  
                        className="btn bg-gray-200 hover:bg-gray-300 px-2 py-2 font-medium rounded w-[50px]"
                        ref={cancelBtn}
                    >
                        Cancel
                    </button>
                    <button 
                        type="button" 
                        className="btn bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 font-medium rounded w-[50px]"
                        ref={saveBtn}
                    >
                        Save
                    </button>
                </div>
            </div>
	</div>
    )
}

export default Field