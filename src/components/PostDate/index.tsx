type Date = {
  date: string;
};

const PostDate = ({ date }: Date) => {
  const getPostDate = (date: string): string => {
    const milliSeconds = Date.now() - new Date(date).getTime();
    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (seconds < 360) return `방금 전`;
    else if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    else if (hours < 24) return `${Math.floor(hours)}시간 전`;
    else if (days < 8) return `${Math.floor(days)}일 전`;
    else {
      const postDate = new Date(date);
      return `${postDate.getFullYear()}년 ${postDate.getMonth() + 1}월 ${postDate.getDate()}일`;
    }
  };

  return <span>{getPostDate(date)}</span>;
};

export default PostDate;
