import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import S from './style';

const PostDetail = () => {
  const { id } = useParams();
  
  const [posts] = useState([
    {
      id: 1,
      subject: '파이트클럽 영화 리뷰(게시글 제목)',
      title:'파이트클럽',
      content: '기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    },
    {
      id: 2,
      subject: '기생충 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    },
    {
      id: 3,
      subject: '3 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    },
    {
      id: 4,
      subject: '4 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 5,
      subject: '5 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 6,
      subject: '6 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 7,
      subject: '7 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
    ,
    {
      id: 8,
      subject: '8 영화 리뷰(게시글 제목)',
      title: '기생충',
      content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
    }
  ]);

  const post = posts.find(post => post.id === parseInt(id));

  if (!posts) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <S.PostDetailContainer>
      <S.PostDetailSubject>{post.subject}</S.PostDetailSubject>
      <S.PostDetailTitle>{post.title}</S.PostDetailTitle>
      <S.PostDetailContent>{post.content}</S.PostDetailContent>
    </S.PostDetailContainer>
  );
};

export default PostDetail;