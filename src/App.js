import './App.css';

//https://shoprhode.com/collections/all

let products = [
  {
    id: 1,
    title: 'River Top',
    type: 'Cane Stripe',
    price: '77,200',
    sizes: ['XS', 'S', 'M', 'L', 'ML'],
    image: './images/river-top.jpg',
  },
  {
    id: 2,
    title: 'April Skirt',
    type: 'Cane Stripe',
    price: '100,400',
    sizes: ['XS', 'S', 'M', 'L', 'ML'],
    image: './images/april-skirt.jpg',
  },
  {
    id: 3,
    title: 'Felix Dress',
    type: 'Royal Vichy Rose',
    price: '183,800',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/felix-dress.jpg',
  },
  {
    id: 4,
    title: 'Velvet Dress',
    type: 'Air Force Blue',
    price: '168,300',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/velvet-adrian-dress.jpg',
  },
  {
    id: 5,
    title: 'Velvet Arabella',
    type: 'Cream Vichy Rose',
    price: '180,700',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/velvet-arabella-dress.jpg',
  },
  {
    id: 6,
    title: 'Velvet Benji Dress',
    type: 'Carmen Yellow',
    price: '168,300',
    sizes: ['XS', 'S', 'M', 'L', 'ML'],
    image: './images/velvet-benji-dress.jpg',
  },
  {
    id: 7,
    title: 'Viola Dress',
    type: 'Cream Vichy Rose',
    price: '214,600',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/viola-dress.jpg',
  },
  {
    id: 8,
    title: 'Stevie Coat',
    type: 'Cream Vichy Rose',
    price: '222,900',
    sizes: ['XS/S', 'M/L'],
    image: './images/stevie-coat.jpg',
  },
  {
    id: 9,
    title: 'Valvet Jemima',
    type: 'Air Force Blue',
    price: '165,200',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/velvet-jemima.jpg',
  },
  {
    id: 10,
    title: 'Romana Dress',
    type: 'Cream Papillon',
    price: '183,800',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/romana-dress.jpg',
  },
  {
    id: 11,
    title: 'Luke Dress',
    type: 'Royal Vichy Rose',
    price: '162,100',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/luke-dress.jpg',
  },
  {
    id: 12,
    title: 'Tommy Skirt',
    type: 'Cream Papillon',
    price: '109,700',
    sizes: ['0', '2', '4', '6', '8', '10', '12', '14'],
    image: './images/tommy-skirt.jpg',
  },
];

function App() {
  return (
    <div className="products">
      {products.map(product => {
        return (
          <div className="product-box" key={product.id}>
            <div className="img-box">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="details-box">
              <div className="detail">
                <a href="#">
                  <div className="title">{product.title}</div>
                  <div className="type">{product.type}</div>
                  <div className="price">Rs. {product.price}</div>
                </a>
              </div>
              <div className="variation-box">
                <p>Select a size</p>
                <ul>
                  {product.sizes.map((size, i) => (
                    <li key={i}>{size}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
