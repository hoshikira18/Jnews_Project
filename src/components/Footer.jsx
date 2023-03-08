import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { BsPerson, BsPeople } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <footer class="relative bottom-0 left-0 right-0 h-full border-t border-sky-900 px-4 py-8 dark:bg-zinc-900/75 min-[300px]:w-full md:px-12 lg:px-10">
        <div class="flex flex-col items-start justify-center min-[300px]:w-full md:flex-row md:items-center md:space-x-20">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334939403_741346244217154_7734116314444814245_n.png?stp=dst-png_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=SwBI9qfkTUQAX_flF13&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR_gac9kpZ06z7D7kb7QRO2q5wjJqcaC87Er3jFgDzipQ&oe=642D8CA8"
            alt="logo"
            class="aspect-square h-32 rounded-full object-cover"
          />

          <div class="mb-3 flex flex-col space-y-4 md:mb-0">
            <div class="flex items-center space-x-3 ">
              <div className="text-3xl text-blue-600">
                <CiLocationOn />
              </div>
              <a
                href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9"
                target="_blank"
                rel="noreferrer"
                class="max-w-xs transition-all  hover:text-blue-600  dark:text-white"
              >
                {t("footer.footer1")}
              </a>
            </div>
            <div class="flex items-center space-x-3 hover:text-blue-600  dark:text-white">
              <div className="text-3xl text-blue-600">
                <BsPeople />
              </div>
              <div className="pl-1">{t("footer.footer2")}</div>
            </div>
          </div>
          <div class="mb-3 flex flex-col space-y-3 md:mb-0">
            <div class="flex items-center space-x-3">
              <div className="text-3xl text-blue-600">
                <BsPerson />
              </div>
              <div className="hover:text-blue-600  dark:text-white">
                <p>{t("footer.footer3")}</p>
                <p class="font-semibold">Trần Văn Khuyến</p>
              </div>
            </div>
            <div class="flex items-center space-x-2 hover:text-blue-600  dark:text-white">
              <div className="text-3xl text-blue-600">
                <CgMail />
              </div>
              <div className="pl-1">Team5@fpt.edu.vn</div>
            </div>
            <div class="flex items-center space-x-3 hover:text-blue-600  dark:text-white">
              <div className="text-3xl text-blue-600 ">
                <AiOutlinePhone />
              </div>
              <div className="pl-1 ">0987 563 385</div>
            </div>
          </div>
          <div class="mb-3 flex flex-col space-y-4 md:mb-0">
            <div class="flex items-center space-x-3"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
