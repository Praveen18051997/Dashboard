import Layout from "../components/Layout";
import avatar from "../assets/images/Avatar.png";

import ProfileInfoCard from "../components/Profile/ProfileInfoCard";
import FriendsList from "../components/Profile/FriendsList";
import PhotosGrid from "../components/Profile/PhotosGrid";
import CreatePost from "../components/Profile/CreatePost";
import PostCard from "../components/Profile/PostCard";

import cityImage from "../assets/images/post1.png";
import beachImage from "../assets/images/post2.png";

const Profile = () => {
  return (
    <Layout>

      {/* Main Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

        {/* Left Sidebar */}

        <div className="xl:col-span-4 space-y-6">

          <ProfileInfoCard />

          <FriendsList />

          <PhotosGrid />

        </div>

        {/* Right Content */}

        <div className="xl:col-span-8 space-y-6">

          <CreatePost />

          <PostCard
            avatar={avatar}
            name="Dustin Williamson"
            date="Jan 17, 2020"
            image={cityImage}
            description="Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes. We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations."
          />

          <PostCard
            avatar={avatar}
            name="Dustin Williamson"
            date="Jan 15, 2020"
            image={beachImage}
            description="Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well."
            isVideo={true}
          />

        </div>

      </div>

    </Layout>
  );
};

export default Profile;