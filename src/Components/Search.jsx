{!loading && !error && filteredUsers.length === 0
  ? <p>No users found</p>
  : <div className='d-flex flex-wrap justify-content-between '>
      {filteredUsers.map(user =>

          <div className="card col-4" key={user.id}>
            

<Link className='product-card position-relative'>
<div className="wishlist-icon position-absolute">
<Link><img src="images/favorite1.svg" alt="" /></Link>
</div>
<div >
<img src='images/catigory/bed1.png' alt="" className='img-fluid m-3' />

</div>
<div className="card-body product-details">

<h6 className='brand'>{user.firstName}</h6>
<div className='d-block'>
<h5 className='product-title card-title'>{user.maidenName}</h5>
</div>
{/* <ReactStars
count={5}
size={24}
value={user.rate}
// edit={false}
activeColor="#ffd700" /> */}
<p className="price">$ {user.age}</p>
</div>
<div className="action-bar position-absolute">
<div className="d-flex flex-column gap-15">
<Link><img src="images/cart.svg" alt="fa" /></Link>
<Link><img src="images/eye.svg" alt="fa" /></Link>
<Link><img src="images/share.svg" alt="fa" /></Link>
</div>
</div>
</Link>

          
          </div>
           
           )}
  </div>
}