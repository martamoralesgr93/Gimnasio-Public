import React, { useState } from 'react';
import { deleteUser } from '../services/user.service';
import './UserProfileCard.css';
import Swal from 'sweetalert2';
import { Link, Navigate } from 'react-router-dom';
import { ChatInput } from './ChatInput';
import { useAuth } from '../context/authContext';

export const UserProfileCard = ({ user }) => {
  const { isSuperAdmin, logout } = useAuth();
  
  const handleDelete = async () => {
    Swal.fire({
      title: 'TERMINATE PROFILE?',
      text: 'This action will permanently erase your performance record.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#C5A028',
      cancelButtonColor: '#333',
      confirmButtonText: 'YES, DELETE PROFILE',
      background: '#0F0F10',
      color: '#F5F5F5'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteUser(user._id);
        if (response?.status === 200) {
          Swal.fire('PROCESSED', 'Your account has been deactivated.', 'success');
          logout();
          return <Navigate to="/register" />;
        } else {
          Swal.fire('ERROR', 'System failed to process deletion.', 'error');
        }
      }
    });
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.image} alt={user?.name} className="profile-avatar" />
        <span className="profile-tag">ELITE MEMBER</span>
        <h1>{user.name}</h1>
        <p className="profile-info">{user.age} YRS | {user.gender?.toUpperCase()}</p>
      </div>

      <div className="performance-stats">
        <div className="stat-box">
          <span className="stat-val">742</span>
          <span className="stat-lbl">HYROX SCORE</span>
        </div>
        <div className="stat-box">
          <span className="stat-val">52.4</span>
          <span className="stat-lbl">VO2 MAX</span>
        </div>
        <div className="stat-box">
          <span className="stat-val">12</span>
          <span className="stat-lbl">WK SESSIONS</span>
        </div>
      </div>

      <div className="profile-actions">
        <Link to="/update/update" className="btn-profile">
          EDIT PROFILE
        </Link>
        <Link to="/changePassword" className="btn-profile">
          SECURITY
        </Link>
        {isSuperAdmin && (
          <Link to="/superadmin" className="btn-profile btn-gold">
            ADMIN PANEL
          </Link>
        )}
        <button onClick={handleDelete} className="btn-profile btn-danger-outline">
          TERMINATE ACCOUNT
        </button>
      </div>

      <div className="logout-container">
        <button onClick={logout} className="logout-button">
          <span className="material-symbols-outlined">logout</span>
          <span>SIGN OUT</span>
        </button>
      </div>
    </div>
  );
};
