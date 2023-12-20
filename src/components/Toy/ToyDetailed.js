import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../share/Header';
import Footer from '../share/Footer';


const ToyDetail = ({ toys }) => {
  const { id } = useParams();
  const [selectedToy, setSelectedToy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToy = async () => {
      try {
        // Filter the selected toy from the list based on the ID
        const toy = toys.find((toy) => toy._id === id);

        if (toy) {
          setSelectedToy(toy);
        } else {
          console.log('Toy not found');
        }
      } catch (error) {
        console.error('Error fetching toy:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToy();
  }, [id, toys]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!selectedToy) {
    return <p>Toy not found</p>;
  }

  return (
    <>
      <Header />
      {/* <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={selectedToy.image === '' ? '/images/products/uhoh.png' : `/images/products/${selectedToy.image}`}
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h2>{selectedToy.name}</h2>
            <h3>Category: {selectedToy.category.name}</h3>
            <p>Price: {selectedToy.price} VND</p>
            <p>Avaiable at:</p>
            <p>
              {selectedToy.branch.location}, {selectedToy.branch.city}
            </p>
          </div>
        </div>
      </div> */}
      <section class="py-5">
        <div class="container">
          <div class="row gx-5">
            <aside class="col-lg-6">
              <div class="border rounded-4 mb-3 d-flex justify-content-center">
                <span data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image">
                  <img
                      src={selectedToy.image === '' ? '/images/products/uhoh.png' : `/images/products/${selectedToy.image}`}
                      className="img-fluid rounded"
                      alt={selectedToy.image}
                    />
                </span>
              </div>
              <div class="d-flex justify-content-center mb-3">
                <span data-fslightbox="mygalley" class="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" >
                  {/* <img
                    src={selectedToy.image === '' ? '/images/products/uhoh.png' : `/images/products/${selectedToy.image}`}
                    className="img-fluid rounded"
                    alt=""
                  /> */}
                </span>
              </div>

            </aside>
            <main class="col-lg-6">
              <div class="ps-lg-3">
                <h4 class="title text-dark">
                  {selectedToy.name}
                </h4>
                <div class="d-flex flex-row my-3">
                  <div class="text-warning mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span class="ms-1">
                      4.5
                    </span>
                  </div>
                  <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                  <span class="text-success ms-2">In stock</span>
                </div>

                <div class="mb-3">
                  <span class="h5">$75.00</span>
                  <span class="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                  men.
                </p>

                <div class="row">
                  <dt class="col-3">Type:</dt>
                  <dd class="col-9">Regular</dd>

                  <dt class="col-3">Color</dt>
                  <dd class="col-9">Brown</dd>

                  <dt class="col-3">Material</dt>
                  <dd class="col-9">Cotton, Jeans</dd>

                  <dt class="col-3">Brand</dt>
                  <dd class="col-9">Reebook</dd>
                </div>

                <hr />

                <div class="row mb-4">
                  <div class="col-md-4 col-6">
                    <label class="mb-2">Size</label>
                    <select class="form-select border border-secondary" style={{height: "35px"}}>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>

                  <div class="col-md-4 col-6 mb-3">
                    <label class="mb-2 d-block">Quantity</label>
                    <div class="input-group mb-3" style={{width: "170px"}}>
                      <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                        <i class="fas fa-minus"></i>
                      </button>
                      <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="*" class="btn btn-warning shadow-0"> Buy now </a>
                <a href="*" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                <a href="*" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Save </a>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default ToyDetail;
