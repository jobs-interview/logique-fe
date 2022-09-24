export const menuModules = [
  {
    id: 1,
    label: 'Master',
    isTitle: true,
    isDisplay: true,
  },
  {
    id: 2,
    label: 'Master',
    icon: 'ri-dashboard-line',
    isMenuCollapsed: false,
    idTitle: 1,
    isDisplay: true,
    subItems: [
      {
        id: 3,
        label: 'Barang',
        link: '/master/barang',
        action: {
          insert: {
            status: true,
            action: 'insertMasterBarang',
          },
          update: {
            status: true,
            action: 'updateMasterBarang',
          },
          delete: {
            status: true,
            action: 'deleteMasterBarang',
          },
        },
        isSub: true,
      },
      {
        id: 4,
        label: 'Customer',
        link: '/master/customer',
        action: {
          insert: {
            status: true,
            action: 'insertMasterCustomer',
          },
          update: {
            status: true,
            action: 'updateMasterCustomer',
          },
        },
        isSub: true,
      },
      {
        id: 5,
        label: 'Supplier',
        link: '/master/supplier',
        action: {
          insert: {
            status: true,
            action: 'insertMasterSupplier',
          },
          update: {
            status: true,
            action: 'updateMasterSupplier',
          },
        },
        isSub: true,
      },
      {
        id: 6,
        label: 'Sales',
        link: '/master/sales',
        action: {
          insert: {
            status: true,
            action: 'insertMasterSales',
          },
          update: {
            status: true,
            action: 'updateMasterSales',
          },
        },
        isSub: true,
      },
      {
        id: 7,
        label: 'Akun Perkiraan',
        link: '/master/akunting',
        action: {
          insert: {
            status: true,
            action: 'insertMasterAkunPerkiraan',
          },
          update: {
            status: true,
            action: 'updateMasterAkunPerkiraan',
          },
        },
        isSub: true,
      },
      {
        id: 8,
        label: 'Mapping Perkiraan',
        link: '/master/mappingAkunting',
        action: {
          insert: {
            status: true,
            action: 'insertMasterMappingPerkiraan',
          },
          update: {
            status: true,
            action: 'updateMasterMappingPerkiraan',
          },
        },
        isSub: true,
      },
      {
        id: 9,
        label: 'Gudang',
        link: '/master/gudang',
        action: {
          insert: {
            status: true,
            action: 'insertMasterGudang',
          },
          update: {
            status: true,
            action: 'updateMasterGudang',
          },
        },
        isSub: true,
      },
      {
        id: 10,
        label: 'User',
        link: '/master/user',
        action: {
          insert: {
            status: true,
            action: 'insertMasterUser',
          },
          update: {
            status: true,
            action: 'updateMasterUser',
          },
          delete: {
            status: true,
            action: 'deleteMasterUser',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 11,
    label: 'Transaksi',
    isDisplay: true,
    isTitle: true,
  },
  {
    id: 12,
    label: 'Pembelian',
    icon: 'fas fa-shopping-cart',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 11,
    subItems: [
      {
        id: 13,
        label: 'Purchase Order / PO',
        link: '/purchasing/order',
        action: {
          insert: {
            status: true,
            action: 'insertPembelianPO',
          },
          update: {
            status: true,
            action: 'updatePembelianPO',
          },
          delete: {
            status: true,
            action: 'deletePembelianPO',
          },
        },
        isSub: true,
      },
      {
        id: 14,
        label: 'Pembelian',
        link: '/purchasing/lpb',
        action: {
          insert: {
            status: true,
            action: 'insertPembelian',
          },
          update: {
            status: true,
            action: 'updatePembelian',
          },
        },
        isSub: true,
      },
      {
        id: 15,
        label: 'Retur Pembelian',
        link: '/purchasing/retur-pembelian',
        action: {
          insert: {
            status: true,
            action: 'insertPembelianRetur',
          },
          update: {
            status: true,
            action: 'updatePembelianRetur',
          },
        },
        isSub: true,
      },
      {
        id: 16,
        label: 'Pembayaran',
        link: '/purchasing/bayar-pembelian',
        action: {
          insert: {
            status: true,
            action: 'insertPembelianPembayaran',
          },
          update: {
            status: true,
            action: 'updatePembelianPembayaran',
          },
        },
        isSub: true,
      },
      {
        id: 17,
        label: 'Uang Muka',
        link: '/purchasing/uang-muka',
        action: {
          insert: {
            status: true,
            action: 'insertPembelianUangMuka',
          },
          update: {
            status: true,
            action: 'updatePembelianUangMuka',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 18,
    label: 'Penjualan',
    icon: 'fas fa-cash-register',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 11,
    subItems: [
      {
        id: 19,
        label: 'Sales Order / SO',
        link: '/penjualan/sales-order',
        action: {
          insert: {
            status: true,
            action: 'insertPenjualanSO',
          },
          update: {
            status: true,
            action: 'updatePenjualanSO',
          },
          delete: {
            status: true,
            action: 'deletePenjualanSO',
          },
        },
        isSub: true,
      },
      {
        id: 20,
        label: 'Penjualan',
        link: '/penjualan',
        action: {
          insert: {
            status: true,
            action: 'insertPenjualan',
          },
          update: {
            status: true,
            action: 'updatePenjualan',
          },
        },
        isSub: true,
      },
      {
        id: 21,
        label: 'Pengiriman',
        link: '/penjualan/pengiriman',
        action: {
          insert: {
            status: true,
            action: 'insertPenjualanPengiriman',
          },
          update: {
            status: true,
            action: 'updatePenjualanPengiriman',
          },
        },
        isSub: true,
      },
      {
        id: 22,
        label: 'Retur Penjualan',
        link: '/penjualan/retur-penjualan',
        action: {
          insert: {
            status: true,
            action: 'insertPenjualanRetur',
          },
          update: {
            status: true,
            action: 'updatePenjualanRetur',
          },
        },
        isSub: true,
      },
      {
        id: 23,
        label: 'Pembayaran',
        link: '/penjualan/bayar-penjualan',
        action: {
          insert: {
            status: true,
            action: 'insertPenjualanPembayaran',
          },
          update: {
            status: true,
            action: 'updatePenjualanPembayaran',
          },
        },
        isSub: true,
      },
      {
        id: 24,
        label: 'Uang Muka',
        link: '/penjualan/uang-muka',
        action: {
          insert: {
            status: true,
            action: 'insertPenjualanUangMuka',
          },
          update: {
            status: true,
            action: 'updatePenjualanUangMuka',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 25,
    label: 'Gudang',
    isDisplay: true,
    isTitle: true,
  },
  {
    id: 26,
    label: 'Gudang',
    icon: 'fas fa-truck-moving',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 25,
    subItems: [
      {
        id: 27,
        label: 'Transfer Gudang',
        link: '/gudang/transfer',
        action: {
          insert: {
            status: true,
            action: 'insertTransferGudang',
          },
          update: {
            status: true,
            action: 'updateTransferGudang',
          },
        },
        isSub: true,
      },
      {
        id: 28,
        label: 'Penyesuaian Stok',
        link: '/gudang/penyesuaian',
        action: {
          insert: {
            status: true,
            action: 'insertPenyesuaianStok',
          },
          update: {
            status: true,
            action: 'updatePenyesuaianStok',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 29,
    label: 'Akuntasi',
    isDisplay: true,
    isTitle: true,
  },
  {
    id: 30,
    label: 'Akuntansi',
    icon: 'fas fa-file-alt',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 29,
    subItems: [
      {
        id: 31,
        label: 'Bukti Kas Masuk',
        link: '/akuntansi/bkm',
        action: {
          insert: {
            status: true,
            action: 'insertBKM',
          },
          update: {
            status: true,
            action: 'updateBKM',
          },
        },
        isSub: true,
      },
      {
        id: 32,
        label: 'Bukti Kas Keluar',
        link: '/akuntansi/bkk',
        action: {
          insert: {
            status: true,
            action: 'insertBKK',
          },
          update: {
            status: true,
            action: 'updateBKK',
          },
        },
        isSub: true,
      },
      {
        id: 33,
        label: 'Bukti Bank Masuk',
        link: '/akuntansi/bbm',
        action: {
          insert: {
            status: true,
            action: 'insertBBM',
          },
          update: {
            status: true,
            action: 'updateBBM',
          },
        },
        isSub: true,
      },
      {
        id: 34,
        label: 'Bukti Bank Keluar',
        link: '/akuntansi/bbk',
        action: {
          insert: {
            status: true,
            action: 'insertBBK',
          },
          update: {
            status: true,
            action: 'updateBBK',
          },
        },
        isSub: true,
      },
      {
        id: 35,
        label: 'Jurnal',
        link: '/akuntansi/jurnal',
        action: {
          insert: {
            status: true,
            action: 'insertJurnal',
          },
          update: {
            status: true,
            action: 'updateJurnal',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 36,
    label: 'Laporan',
    isDisplay: true,
    isTitle: true,
  },
  {
    id: 37,
    label: 'Laporan Pembelian',
    icon: 'fas fa-file-signature',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 36,
    subItems: [
      {
        id: 38,
        label: 'Laporan PO',
        link: '/laporan/pembelian/purchase-order',
        action: {
          insert: {
            status: true,
            action: 'laporanPembelianPO',
          },
        },
        isSub: true,
      },
      {
        id: 39,
        label: 'Laporan Pembelian',
        link: '/laporan/pembelian/penerimaan-barang',
        action: {
          insert: {
            status: true,
            action: 'laporanPembelian',
          },
        },
        isSub: true,
      },
      {
        id: 40,
        label: 'Laporan Retur',
        link: '/laporan/pembelian/purchase-retur',
        action: {
          insert: {
            status: true,
            action: 'laporanReturPembelian',
          },
        },
        isSub: true,
      },
      {
        id: 41,
        label: 'Laporan Pembayaran',
        link: '/laporan/pembelian/purchase-payment',
        action: {
          insert: {
            status: true,
            action: 'laporanPembayaranPembelian',
          },
        },
        isSub: true,
      },
      {
        id: 42,
        label: 'Laporan Uang Muka',
        link: '/laporan/pembelian/purchase-uang-muka',
        action: {
          insert: {
            status: true,
            action: 'laporanDPPembelian',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 43,
    label: 'Laporan Penjualan',
    icon: 'fas fa-file-signature',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 36,
    subItems: [
      {
        id: 44,
        label: 'Laporan SO',
        link: '/laporan/penjualan/sales-order',
        action: {
          insert: {
            status: true,
            action: 'laporanPenjualanSO',
          },
        },
        isSub: true,
      },
      {
        id: 45,
        label: 'Laporan Penjualan',
        link: '/laporan/penjualan/pengiriman-barang',
        action: {
          insert: {
            status: true,
            action: 'laporanPenjualan',
          },
        },
        isSub: true,
      },
      {
        id: 46,
        label: 'Laporan Pengiriman Barang',
        link: '/laporan/penjualan/pengiriman-barang1',
        action: {
          insert: {
            status: true,
            action: 'laporanPengirimanPenjualan',
          },
        },
        isSub: true,
      },
      {
        id: 47,
        label: 'Laporan Retur',
        link: '/laporan/penjualan/sales-return',
        action: {
          insert: {
            status: true,
            action: 'laporanReturPenjualan',
          },
        },
        isSub: true,
      },
      {
        id: 48,
        label: 'Laporan Pembayaran',
        link: '/laporan/penjualan/sales-payment',
        action: {
          insert: {
            status: true,
            action: 'laporanPembayaranPenjualan',
          },
        },
        isSub: true,
      },
      {
        id: 49,
        label: 'Laporan Uang Muka',
        link: '/laporan/penjualan/sales-uang-muka',
        action: {
          insert: {
            status: true,
            action: 'laporanDPPenjualan',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 50,
    label: 'Laporan Stok',
    icon: 'fas fa-file-signature',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 36,
    subItems: [
      {
        id: 51,
        label: 'Stok Akhir',
        link: '/laporan/stok/stok-akhir',
        action: {
          insert: {
            status: true,
            action: 'laporanStokAkhir',
          },
        },
        isSub: true,
      },
      {
        id: 52,
        label: 'Kartu Stok',
        link: '/laporan/stok/kartu-stok',
        action: {
          insert: {
            status: true,
            action: 'laporanKartuStok',
          },
        },
        isSub: true,
      },
      {
        id: 53,
        label: 'Mutasi Stok',
        link: '/laporan/stok/mutasi-stok',
        action: {
          insert: {
            status: true,
            action: 'laporanMutasiStok',
          },
        },
        isSub: true,
      },
      {
        id: 54,
        label: 'Penyesuaian Stok',
        link: '/laporan/stok/penyesuaian-stok',
        action: {
          insert: {
            status: true,
            action: 'laporanPenyesuaianStok',
          },
        },
        isSub: true,
      },
    ],
  },
  {
    id: 55,
    label: 'Laporan Akuntansi',
    icon: 'fas fa-file-signature',
    isMenuCollapsed: false,
    isDisplay: true,
    idTitle: 36,
    subItems: [
      {
        id: 56,
        label: 'Buku Besar',
        link: '/laporan/akuntansi/buku-besar',
        action: {
          insert: {
            status: true,
            action: 'laporanAkuntansiBukuBesar',
          },
        },
        isSub: true,
      },
    ],
  },
]
