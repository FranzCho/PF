import React from 'react'
import PostGrid from './PostGrid'
import { getFeaturedPosts } from '@/service/post'

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터 읽어와야 함.
  const posts = await getFeaturedPosts();
  // 2. 모든 데이터를 보여줌.
  return (
    <>
      <h2 className='text-2xl font-bold my-2'>📌 Featured Posts</h2>
      <PostGrid posts={posts} />
    </>
  )
}
