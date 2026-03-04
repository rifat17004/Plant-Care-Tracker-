import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-7xl mx-auto flex justify-between">
        {/* Brand Section */}
        <aside>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🌿</span>
            <span className="text-2xl font-black tracking-tighter text-white">
              LeafLog
            </span>
          </div>
          <p className="max-w-xs opacity-70 leading-relaxed">
            Your digital garden companion. Helping plant parents track, nurture,
            and grow their indoor jungles since 2026.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="btn btn-ghost btn-circle btn-sm hover:text-success text-xl">
              𝕏
            </button>
            <button className="btn btn-ghost btn-circle btn-sm hover:text-success text-xl">
              📸
            </button>
            <button className="btn btn-ghost btn-circle btn-sm hover:text-success text-xl">
              📘
            </button>
          </div>
        </aside>

        <nav>
          <header className="footer-title text-success opacity-100 uppercase tracking-widest font-bold">
            Quick Links
          </header>
          <Link
            to="/"
            className="link link-hover opacity-70 hover:opacity-100 mb-1"
          >
            Home
          </Link>
          <Link
            to="/all-plants"
            className="link link-hover opacity-70 hover:opacity-100 mb-1"
          >
            All Plants
          </Link>
          <Link
            to="/add-plants"
            className="link link-hover opacity-70 hover:opacity-100 mb-1"
          >
            Add New Plant
          </Link>
          <Link
            to="/my-plants"
            className="link link-hover opacity-70 hover:opacity-100 mb-1"
          >
            My Collection
          </Link>
        </nav>

        <nav>
          <header className="footer-title text-success opacity-100 uppercase tracking-widest font-bold">
            Resources
          </header>
          <a className="link link-hover opacity-70 hover:opacity-100 mb-1">
            Care Guides
          </a>
          <a className="link link-hover opacity-70 hover:opacity-100 mb-1">
            Plant FAQ
          </a>
          <a className="link link-hover opacity-70 hover:opacity-100 mb-1">
            Support
          </a>
        </nav>

        <form>
          <header className="footer-title text-success opacity-100 uppercase tracking-widest font-bold">
            Newsletter
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-neutral-content opacity-70">
                Get monthly care tips delivered to your inbox.
              </span>
            </label>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 bg-neutral-focus border-neutral-content/20 text-white focus:border-success"
              />
              <button className="btn btn-success absolute top-0 right-0 rounded-l-none text-white">
                Join
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="border-t border-neutral-content/10">
        <div className="footer px-10 py-6 border-t border-base-300 text-neutral-content max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
          <p>© 2026 LeafLog - All rights reserved by No one.</p>
          <div className="flex gap-6">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
