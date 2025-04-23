import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-black text-center py-4 px-6 border">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} PayPal Pte. Ltd. memiliki lisensi dari Monetary Authority of Singapore sebagai Lembaga Pembayaran Utama berdasarkan Payment Services Act 2019.
      </p>
    </footer>
  );
};

export default Footer;