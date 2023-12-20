import React, { useState, useEffect } from 'react';
import { GetAllCategory, DeleteCategory } from '../hooks/categoryHook';
import ModalForm from './ModalForm';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await GetAllCategory();
        // Update the state with the fetched data
        setCategories(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    //UNDONE: Confirmation & FIX 404 ERROR
    DeleteCategory(id);
    window.location.reload();
  };

  return (
    <div>
      <div
        class="container"
      >
        <h2>Category List</h2>
        <div
          class="table-responsive"
        >
            <ModalForm categories={categories} action="add" />
          <table
            class="table table-primary"
          >
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category._id} class="">
                  <td>{index+1}</td>
                  <td>{category.name}</td>

                  <td>
                    <div class="d-flex gap-2">
                    <ModalForm categories={categories} id={category._id} index={index} action="edit" />
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={()=>handleDelete(category._id)}
                      >
                        Delete
                      </button>
                    </div>
                    
                    
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default CategoriesList;
