import "./ProductDescription.css";
export default function ProductDescription() {
  return (
    <div className="product-description-box">
      <div className="product-description-nav">
        <div className="product-description-navbox">Description</div>
        <div className="product-description-navbox fade">Reviews (250)</div>
      </div>
      <div className="description-box">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quos cum, possimus quia porro ratione a itaque dolor, laborum iusto,
          necessitatibus suscipit eaque assumenda rem maiores repudiandae fugit
          dolore ullam.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          modi nihil, molestiae necessitatibus reprehenderit dicta soluta,
          minima vero incidunt iusto sapiente tenetur.
        </p>
      </div>
    </div>
  );
}
