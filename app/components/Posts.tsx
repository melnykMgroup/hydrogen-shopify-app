import {Link} from '@remix-run/react';
import type {SanityDocument} from '@sanity/client';

export default function Posts({posts}: {posts: SanityDocument[]}) {
  return (
    <>
      {posts?.length > 0 ? (
        posts.map((post) => {
          return (
            <Link key={post._id} to={post.slug.current} className="p-4">
              <h2>{post.title}</h2>
            </Link>
          );
        })
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </>
  );
}
