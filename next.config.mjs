/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com"]
    },
    compiler: {
    styledComponents: true, // If using styled-components
  },
};

export default nextConfig;
