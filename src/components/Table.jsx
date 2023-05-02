import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TableComponent = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>first name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
