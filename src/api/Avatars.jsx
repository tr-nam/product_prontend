const getAvatarUrl = (name = 'Unknown', size = 64) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=${size}&background=random&rounded=true`;
};

export default getAvatarUrl;