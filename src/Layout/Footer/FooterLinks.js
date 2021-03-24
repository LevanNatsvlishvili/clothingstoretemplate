import React from 'react';

const FooterLinks = () => {
  return (
    <div className='d-flex justify-content-center justify-content-md-center'>
      <div className='p-1 d-flex justify-content-center' xs={3}>
        <SocialLink
          linkAdress='www.google.com'
          icon='/icons/socialMedia/instagram.svg' />
      </div>
      <div className='p-1 d-flex justify-content-center' xs={3}>
        <SocialLink
          linkAdress='www.facebook.com'
          icon='/icons/socialMedia/facebook.svg' />
      </div>
      <div className='p-1 d-flex justify-content-center' xs={3}>
        <SocialLink
          linkAdress='www.pinterest.com'
          icon='/icons/socialMedia/pinterest.svg' />
      </div>
      <div className='p-1 d-flex justify-content-center' xs={3}>
        <SocialLink
          linkAdress='www.youtube.com'
          icon='/icons/socialMedia/youtube.svg' />
      </div>
    </div>

  )
}

const SocialLink = (props) => {
  const { icon, linkAdress } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" href={`https://${linkAdress}`}>
      <img src={icon} alt='socialMedia' />
    </a>
  )
}

export default FooterLinks;