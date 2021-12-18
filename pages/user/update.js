import Layout from '../../components/Layout';
import Private from '../../components/authPage/Private';
import ProfileUpdate from '../../components/authPage/ProfileUpdate';
import Link from 'next/link';

const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                       <h5>user profile update page</h5>
                       <ProfileUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;