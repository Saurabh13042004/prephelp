import React from 'react'
import { FaLink } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'
function Admin() {
  return (
    <div>
    <div className="overflow-x-auto m-auto p-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Post</th>
        <th>Status</th>
        <th>Display</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className=''>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Aniket Kumar</div>
              <div className="text-sm opacity-50">Google </div>
            </div>
          </div>
        </td>
        <td>
        <FaLink/>
    
        </td>
        <td>      <span className="badge badge-ghost badge-sm">Active</span></td>
        <td>
        <input type="checkbox" className="toggle"  />
        </td>
        <th>
        <ImBin  size={19}/>
        </th>
      </tr>
  
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>
</div>
    


    
    </div>
  )
}

export default Admin