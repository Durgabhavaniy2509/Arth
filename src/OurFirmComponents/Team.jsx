import React, { useState } from 'react';
import { X,Mail } from 'lucide-react';
import './Team.css';

export function MemberCard({ member }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="member-card">
      <div 
        className="member-image-container"
        
      >
        <img
          src={member.image}
          alt={member.name}
          className="member-image"
        />
        <div className="member-info-overlay">
          <div className='member-icon'>
            <h3 className="member-name">{member.name}</h3>
            <img src="\Icons\plus.png" alt="" width={25}  className="member-image-container" onClick={() => setShowDetails(true)}/>
          </div>
          <p className="member-designation">{member.designation}</p>
        </div>
      </div>

      {showDetails && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setShowDetails(false)}
              className="modal-close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="modal-grid">
              <img
                src={member.image}
                alt={member.name}
                className="modal-image"
              />
              
              <div className="modal-details">
                <h2 className="modal-name">{member.name}</h2>
                <p className="modal-designation">{member.designation}</p>
                <p className="modal-bio">{member.bio}</p>
                
                <div className="modal-links">
                  <a
                    href={`mailto:${member.email}`}
                    className="modal-link"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <img src="\Icons\linkedin.png" className="w-5 h-5" alt="" width={25}/>
                    {/* <Mail className="w-5 h-5" /> */}
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
