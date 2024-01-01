import "./ItemList.scss";
import Footer from "../../1StaticPages/2footer/Footer";
import json from "../../../data.json";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  priceLowHigh,
  popularityval,
  priceHighLow,
  filter3Star,
  filterFassured,
  filterRAMobjects,
  filterROMobjects,
  filter4Star,
  favouriteProduct,
} from "../../../Slice/Slice";

const ItemList = () => {
  const dispatch = useDispatch();

  const { varities, mobileName } = useParams();
  // console.log(varities, mobileName);

  let obj = json.mobiles;

  const current_obj = obj.find(
    (values) => values.varities === varities && values.mobileName === mobileName
  );

  const length = current_obj.mobileVarities.length;

  const Objects = current_obj.mobileVarities;

  const mobilename = current_obj.mobileName;

  //use-Selector
  const { lowTohigh, highTolow, popularity, reduxObject, fav, filterData } =
    useSelector((state) => state.AddtoCart);

  const mapObj = reduxObject ? reduxObject : Objects;

  // Filter RAM Count
  const RAM = Objects.map((values) => values.RAM);
  const sortRAM = RAM.sort((a, b) => a - b);

  let filterRAM = [];
  for (let i = 0; i < sortRAM.length; i++) {
    if (sortRAM[i] !== sortRAM[i + 1]) {
      let a = sortRAM[i];
      if (typeof a == "number") {
        filterRAM.push({ RAM: a });
      }
    }
  }

  // Filter ROM Count
  const ROM = Objects.map((values) => values.ROM);
  const sortROM = ROM.sort((a, b) => a - b);

  let filterROM = [];
  for (let i = 0; i < sortROM.length; i++) {
    if (sortROM[i] !== sortROM[i + 1]) {
      let a = sortROM[i];
      if (typeof a == "number") {
        filterROM.push({ ROM: a });
      }
    }
  }

  // Filter Section
  function handle4Star() {
    dispatch(filter4Star());
  }

  function handle3Star() {
    dispatch(filter3Star());
  }

  function handlefAssured() {
    dispatch(filterFassured());
  }

  function handleRAM(storageValue) {
    dispatch(filterRAMobjects(storageValue));
  }

  function handleROM(storageValue) {
    dispatch(filterROMobjects(storageValue));
  }

  function handleFavourite(mobileName, name) {
    dispatch(favouriteProduct({ mobileName, name }));
  }
  return (
    <>
      <div className="ItemList">
        <div className="filter-sec">
          <li className="title-sec">
            <p>Filters</p>
          </li>

          <li className="categories-sec">
            <p>Categories</p>
            <div className="varities-sec">
              <IoIosArrowBack />
              <span>{varities}</span>
            </div>
            <p>Mobiles</p>
          </li>

          <li className="brandName">
            <div>
              <p>Brand</p>
              <IoIosArrowUp />
            </div>
            <div>
              <input type="checkbox" id="mobilename" />
              <label htmlFor="mobilename">{mobilename}</label>
            </div>
          </li>

          <li className="ratings">
            <div>
              <p>Customer Ratings</p>
              <IoIosArrowUp />
            </div>
            <div>
              <input type="checkbox" id="4star" onClick={handle4Star} />
              <label htmlFor="4star">
                4 <IoMdStar /> & Above
              </label>
            </div>
            <div>
              <input type="checkbox" id="3star" onClick={handle3Star} />
              <label htmlFor="3star">
                3 <IoMdStar /> & Above
              </label>
            </div>
          </li>

          <li className="fAssured">
            <div>
              <p>Flipkart Assured</p>
              <IoIosArrowUp />
            </div>
            <div>
              <input type="checkbox" id="4star" onClick={handlefAssured} />
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="fAssured"
              />
            </div>
          </li>

          <li className="RAM">
            <div>
              <p>RAM</p>
              <IoIosArrowUp />
            </div>
            {filterRAM.map((values, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`${values.RAM}RAM`}
                  onClick={() => handleRAM(values.RAM)}
                />
                <label htmlFor={`${values.RAM}RAM`}>{values.RAM} GB RAM</label>
              </div>
            ))}
          </li>

          <li className="storageCapacity">
            <div>
              <p>Internal Storage</p>
              <IoIosArrowUp />
            </div>
            {filterROM.map((values, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`${values.ROM}ROM`}
                  onClick={() => handleROM(values.ROM)}
                />
                <label htmlFor={`${values.ROM}ROM`}>{values.ROM} GB ROM</label>
              </div>
            ))}
          </li>
        </div>

        <div className="itemList-sec">
          <div>
            <div className="file-path">
              <Link to="/">Home</Link>
              <IoIosArrowForward />
              <Link>{varities}</Link>
              <IoIosArrowForward />
              <li>Mobiles</li>
            </div>
            <div className="mob-types">
              <li>MOTOROLA Mobiles</li>,<li>oppo Mobiles</li>,
              <li>Gionee Mobiles</li>,<li>Vivo Mobiles</li>,
              <li>Smartphones Mobiles</li>,<li>XOLO Mobiles</li>,
              <li>Coolpad Mobiles</li>,<li>Cellecor Mobiles</li>,
              <li>Mobiles & Accessories</li>,<li>Lava Mobiles</li>
            </div>
            <div className="title-sec">
              <span>{mobilename}</span>
              <span>
                (Showing 1 - {length} products of {length} products)
              </span>
            </div>
            <div className="sort-sec">
              <span className="sortby">Sort By</span>
              <ul>
                <li
                  onClick={() => dispatch(popularityval(Objects))}
                  className={popularity ? "blue" : "default"}
                >
                  Popularity
                </li>
                <li
                  onClick={() => dispatch(priceLowHigh())}
                  className={lowTohigh ? "blue" : "default"}
                >
                  Price -- Low to High
                </li>
                <li
                  onClick={() => dispatch(priceHighLow())}
                  className={highTolow ? "blue" : "default"}
                >
                  Price -- High to Low
                </li>
                <li>Newest First</li>
              </ul>
            </div>
            <div className="product-sec">
              {mapObj.map((values, index) => (
                <Productggg
                  key={index}
                  values={values}
                  handleFavourite={handleFavourite}
                  current_obj={current_obj}
                  mobilename={mobilename}
                  fav={fav}
                />
              ))}
            </div>
          </div>

          <div className="Lookingfor">
            <span>Did you find what you were looking for?</span>
            <div className="yesNo">
              <button>
                <FaRegThumbsUp />
              </button>
              <button>
                <FaRegThumbsDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ItemList;

const Productggg = ({
  values,
  handleFavourite,
  current_obj,
  mobilename,
  fav,
}) => {
  return (
    <div className="content-sec">
      <div className="imge-content-sec">
        <div className="img-sec">
          <img src={values.imgURL} alt={values.name} />

          <div className="addtocompare">
            <input type="checkbox" name="addtocompare" id="addtocompare" />
            <span>Add to Compare</span>
          </div>
        </div>

        <FaHeart
          style={values.heart ? { color: "red" } : ""}
          onClick={() => handleFavourite(current_obj.mobileName, values.name)}
        />

        <div className="content">
          <Link
            to={`/MobileDetails/${mobilename}/${values.name}/${values.RAM}/${values.ROM}`}
            className="itemName-sec"
          >
            {values.name}
          </Link>

          <div className="ratings-sec">
            <span>
              {values.ratingsStar}
              <IoMdStar />
            </span>
            <span>{values.ratingsCount.toLocaleString()} Ratings & </span>
            <span>{values.reviews.toLocaleString()} Reviews</span>
          </div>

          <div className="list-sec">
            <li>{values.li1}</li>
            <li>{values.li2}</li>
            <li>{values.li3}</li>
            <li>{values.li4}</li>
            {values.li5 ? <li>{values.li5}</li> : ""}
            <li>{values.li6}</li>
            <li>{values.li7}</li>
          </div>
        </div>
      </div>

      <div className="price-assure-sec">
        <div className="price-sec">
          <span className="sellPrice">
            <FaIndianRupeeSign />
            {values.price.toLocaleString()}
          </span>
          <div className="strike-offer-price">
            <span className="strikePrice">
              <LiaRupeeSignSolid /> {values.strikePrice.toLocaleString()}
            </span>
            <span className="offers">{values.offers}% off</span>
          </div>
        </div>
        <div className="flipkart-assure">
          {values.flipkartAssure ? (
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt="Flipkart Assure"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

// useEffect(() => {
//   setstate(Objects);
// }, [Objects]);

// let [filterActive, setActive] = useState(false);

// Filter Section

// setisActive({ lowTohigh: true });
// const LowHigh = Objects.slice().sort((a, b) => a.price - b.price);
// setobject(LowHigh);

// setisActive({ highTolow: true });
// const HighLow = Objects.slice().sort((a, b) => b.price - a.price);
// setobject(HighLow);

// setisActive({ popularity: true });
// setobject(Objects);

//   setActive(filterActive ? false : true);
//   const fAssured = Objects.filter((values) => values.flipkartAssure === true);
//   // setobject(filterActive ? Objects : fAssured);

//   setActive(filterActive ? false : true);
//   const RAM = Objects.filter((values) => values.RAM === storageValue);
//   // setobject(filterActive ? Objects : RAM);

//   setActive(filterActive ? false : true);
//   const ROM = Objects.filter((values) => values.ROM === storageValue);
//   // setobject(filterActive ? Objects : ROM);
