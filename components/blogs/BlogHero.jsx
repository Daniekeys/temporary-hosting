import React,{useState,useEffect} from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/blog-hero-pic.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
import { useRouter } from "next/router";
import empty from "../../assets/svg/empty-result.svg";
import { blogPosts } from "../../utils/blog-data";
const BlogHero = () => {
  const [search, setSearch] = useState(""); 
  const router = useRouter();
  const handleBlogSearch = () => {
router.push(`/blog?search=${search}#blog`)
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleBlogSearch();
    }
  };
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    if (!search) {
      setAllBlogs(blogPosts);
    } else {
      const filteredBlogs = blogPosts.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
      setAllBlogs(filteredBlogs);
    }
  }, [search]); 

  return (
    <div className=" w-full h-full flow-hide">
      <div className="w-full   relative blog-hero-bg flex flex-col ">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col  mt-[142px] justify-center flow-hide ">
            {/* <div className="w-full flex flex-col  max-w-[725px] relative mx-auto">
              <div
                className=" w-full max-w-[725px] mx-auto rounded-[50px] h-[75px] bg-white bg-opacity-60 flex justify-between px-4 items-center mt-8"
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                <input
                  type="text"
                  className="bg-transparent flex-grow border-none outline-none focus:outline-none focus:border-none placeholder:text-base placeholder:text-ash text-ash text-base "
                  placeholder="search blog"
                  value={search}
                  onKeyDown={handleKeyPress}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {allBlogs?.length === 0 ? (
                  <button
                    className="bg-mainBlue rounded-[50px] h-[50px] px-5 flex items-center justify-center text-white text-base  cursor-pointer lg:min-w-[168px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold  "
                    onClick={() => setSearch("")}
                  >
                    Close
                  </button>
                ) : (
                  <button
                    className="bg-mainBlue rounded-[50px] h-[50px] px-5 flex items-center justify-center text-white text-base  cursor-pointer lg:min-w-[168px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold  "
                    onClick={handleBlogSearch}
                  >
                    Search
                  </button>
                )}
              </div>
              {search && (
                <div className="w-full bg-white max-h-[412px] h-[412px] flow-hide rounded-b-[50px]  absolute top-28 left-0 right-0 ">
                  {allBlogs?.length === 0 && (
                    <div className="w-full flex h-full flex-col justify-center items-center ">
                      <span>
                        <Image src={empty} alt="empty" />
                      </span>
                      <div className="-mt-24 flex flex-col ">
                        <h1 className="text-base font-semibold text-customBlack text-center">
                          No result found
                        </h1>
                        <p className="text-[#55555] text-sm mt-2 font-medium text-center">
                          Plese, search another word
                        </p>
                        <p className="text-mainBlue mt-2 cursor-pointer font-semibold text-center ">
                          Okay
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-4 p-4">
                    {allBlogs?.length > 0 &&
                      allBlogs?.map((blog, index) => {
                        return (
                          <div
                            className="min-h-[40px] py-2 px-2 cursor-pointer hover:bg-mainBlue hover:bg-opacity-10"
                            key={index}
                            onClick={() => {
                              router.push(`/blog?search=${search}#blog`);
                              setSearch("");
                            }}
                          >
                            <p className="text-customBlack w-full truncate">
                              {blog.title}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div> */}
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-1/2">
                <h1
                  className="text-mainBlue font-semibold text-[48px] 2xl:text-[64px]  "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  OUR BLOG
                </h1>
                <p
                  className="text-customBlack font-medium 2xl:text-[32px] lg:text-2xl text-lg mt-7 "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  Stay up to date
                </p>
              </div>
              <div className="w-full lg:w-1/2 mt-24 lg:mt-0 mb-12 lg:mb-24">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full h-auto "
                  // data-aos="fade-up"

                  // data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default BlogHero;
