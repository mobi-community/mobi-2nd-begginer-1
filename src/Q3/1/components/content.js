import { MockData } from "../mock/data";

const Content = () => {
    return <div>게시글 내용
    {MockData.Content.Img}
      <h1>{MockData.Content.Title}</h1>
      <p>{MockData.Content.Content}</p>
    </div>;
  }
  
export default Content;   