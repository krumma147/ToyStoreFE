import React, { useState, useEffect } from 'react';
import { GetAllCategory, DeleteCategory } from '../hooks/categoryHook';
import ModalForm from './ModalForm';
import Loading from "../share/Loading";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      let response = await GetAllCategory();
      setCategories(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this category?')){
      setLoading(true);
      await DeleteCategory(id);
      fetchData();
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className=''>
        <ModalForm categories={categories} action="add" />
      </div>
      <div class="card border-0">
          <div class="card-header">
              <h3 class="card-title text-center">
                Category List
              </h3>
          </div>
          <div class="card-body">
              <table class="table">
                  <thead>
                    <tr className='row'>
                      <th className='col-md-1'>No.</th>
                      <th className='col'>Name</th>
                      <th className='col-md-2'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                    <tr key={category._id} className='row'>
                      <td className='col-md-1'>{index+1}</td>
                      <td className='col'>{category.name}</td>

                      <td className='col-md-2'>
                        <div class="d-flex gap-2">
                        <ModalForm categories={categories} id={category._id} action="edit"
                          fetchData={()=>fetchData()}
                        />
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
    </>
  );
};

export default CategoriesList;
