import { useSelector } from "react-redux";
import "./NormalProfile.css";
import { useEffect } from "react";
import { getProfile } from "../../Store/UserActions";
import { useDispatch } from "react-redux";

export default function NormalProfile() {
  const userDocument = useSelector((state) => state.User.document);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <section className="normal-profile">
      <div className="user-primary-info">
        <div className="profile-image">
          <img src={userDocument.profileImage} alt="" />
        </div>
        <div className="user-info">
          <span className="user-name">{userDocument.fullName}</span>
        </div>
      </div>
      <div className="container">
        <div className="account-details">
          <h1 className="account-details-heading">Account Details</h1>
          <div className="details-content">
            <span>Email : {userDocument.email}</span>
            <span>Address : {userDocument.address}</span>
            <span>City : {userDocument.city}</span>
            <span>Phone : {userDocument.phone}</span>
            <span className="is-verified">
              {userDocument.isVerified ? "Verified" : "Not Verified"}
            </span>
          </div>
        </div>
        <div className="your-orders">You Have No Orders</div>
      </div>
    </section>
  );
}
