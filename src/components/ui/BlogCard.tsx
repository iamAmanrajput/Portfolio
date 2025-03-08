import React from "react";

interface BlogCardProps {
  title: string;
  brief: string;
  coverImage: string | null;
  slug: string;
}

export function BlogCard({ title, brief, coverImage, slug }: BlogCardProps) {
  return (
    <a
      href={`https://deepakmodi.hashnode.dev/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-[1.03]"
    >
      {/* Blog Cover Image */}
      {coverImage ? (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-t-xl">
          <span className="text-gray-500 dark:text-gray-400 text-sm">No Image Available</span>
        </div>
      )}

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {brief}
        </p>
      </div>

      {/* Read More Button */}
      <div className="px-5 pb-4">
        <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </span>
      </div>
    </a>
  );
}