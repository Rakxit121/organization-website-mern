import axios from 'axios';
import React, { useState } from 'react';

const SettingsPage = () => {
    const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '' });

    const changePassword = async () => {
        await axios.put('/api/admin/password', passwords);
        alert('Password updated successfully!');
    };

    return (
        <div>
            <h1>Settings</h1>
            <input
                type="password"
                placeholder="Current Password"
                value={passwords.currentPassword}
                onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
            />
            <input
                type="password"
                placeholder="New Password"
                value={passwords.newPassword}
                onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            />
            <button onClick={changePassword}>Change Password</button>
        </div>
    );
};

export default SettingsPage;
