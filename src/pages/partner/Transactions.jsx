import React, { useState, useEffect } from "react";
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react";

const Transactions = () => {
  // Mock transaction records populated based on user screenshots and pagination test requirements
  const initialTransactions = [
    {
      id: 1,
      name: "Sarah K.",
      email: "sarah@gmail.com",
      method: "Credit card",
      txId: "XXXX2375-U748",
      status: "pending",
      amount: "₹ 1,240",
    },
    {
      id: 2,
      name: "Ian G.",
      email: "iangone@gmail.com",
      method: "UPI",
      txId: "XXXX9376-U748",
      status: "paid",
      amount: "₹ 499",
    },
    {
      id: 3,
      name: "Lily S.",
      email: "lily@gmail.com",
      method: "Credit card",
      txId: "XXXX0286-U748",
      status: "paid",
      amount: "₹ 1,990",
    },
    {
      id: 4,
      name: "May C.",
      email: "mayconer@gmail.com",
      method: "Debit card",
      txId: "XXXX8629-U748",
      status: "paid",
      amount: "₹ 440",
    },
    {
      id: 5,
      name: "Peter E.",
      email: "iangone@gmail.com",
      method: "UPI",
      txId: "XXXX0972-U748",
      status: "paid",
      amount: "₹ 3,240",
    },
    {
      id: 6,
      name: "Emma S.",
      email: "emma.s@gmail.com",
      method: "UPI",
      txId: "XXXX1234-U748",
      status: "paid",
      amount: "₹ 850",
    },
    {
      id: 7,
      name: "John D.",
      email: "johndoe@gmail.com",
      method: "Credit card",
      txId: "XXXX5678-U748",
      status: "pending",
      amount: "₹ 1,500",
    },
    {
      id: 8,
      name: "Alice W.",
      email: "alice@gmail.com",
      method: "Debit card",
      txId: "XXXX9012-U748",
      status: "paid",
      amount: "₹ 620",
    },
    {
      id: 9,
      name: "Robert M.",
      email: "robert.m@gmail.com",
      method: "UPI",
      txId: "XXXX3456-U748",
      status: "paid",
      amount: "₹ 2,100",
    },
    {
      id: 10,
      name: "Clara B.",
      email: "clarab@gmail.com",
      method: "Credit card",
      txId: "XXXX7890-U748",
      status: "paid",
      amount: "₹ 1,350",
    },
    {
      id: 11,
      name: "James P.",
      email: "james.p@gmail.com",
      method: "UPI",
      txId: "XXXX2468-U748",
      status: "pending",
      amount: "₹ 990",
    },
    {
      id: 12,
      name: "Olivia H.",
      email: "olivia.h@gmail.com",
      method: "Debit card",
      txId: "XXXX1357-U748",
      status: "paid",
      amount: "₹ 450",
    },
    {
      id: 13,
      name: "Henry K.",
      email: "henryk@gmail.com",
      method: "Credit card",
      txId: "XXXX8642-U748",
      status: "paid",
      amount: "₹ 2,400",
    },
    {
      id: 14,
      name: "Sophia L.",
      email: "sophial@gmail.com",
      method: "UPI",
      txId: "XXXX9753-U748",
      status: "paid",
      amount: "₹ 1,800",
    },
    {
      id: 15,
      name: "David W.",
      email: "david.w@gmail.com",
      method: "Debit card",
      txId: "XXXX1248-U748",
      status: "pending",
      amount: "₹ 320",
    },
    {
      id: 16,
      name: "Grace T.",
      email: "grace@gmail.com",
      method: "UPI",
      txId: "XXXX1620-U748",
      status: "paid",
      amount: "₹ 1,200",
    },
    {
      id: 17,
      name: "Jack R.",
      email: "jack.r@gmail.com",
      method: "Credit card",
      txId: "XXXX1530-U748",
      status: "paid",
      amount: "₹ 950",
    },
    {
      id: 18,
      name: "Lily T.",
      email: "lilyt@gmail.com",
      method: "UPI",
      txId: "XXXX1420-U748",
      status: "paid",
      amount: "₹ 650",
    },
    {
      id: 19,
      name: "Mia K.",
      email: "mia.k@gmail.com",
      method: "Debit card",
      txId: "XXXX1111-U748",
      status: "pending",
      amount: "₹ 400",
    },
    {
      id: 20,
      name: "Lucas O.",
      email: "lucas@gmail.com",
      method: "Credit card",
      txId: "XXXX9999-U748",
      status: "paid",
      amount: "₹ 2,800",
    },
  ];

  // Filtering states
  const [activeFilter, setActiveFilter] = useState("all"); // "all", "pending", "paid"
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [pageInputVal, setPageInputVal] = useState("1");

  // Apply filters
  const filteredTransactions = initialTransactions.filter((tx) => {
    const matchesStatus =
      activeFilter === "all" || tx.status === activeFilter;
    const matchesSearch =
      tx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.txId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.method.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTransactions.length / pageSize) || 1;

  // Sync current page bounds if data changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      setPageInputVal(String(totalPages));
    }
  }, [filteredTransactions.length, totalPages, currentPage]);

  // Sync pagination input when current page changes
  useEffect(() => {
    setPageInputVal(String(currentPage));
  }, [currentPage]);

  // Paginated items
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageInputChange = (e) => {
    setPageInputVal(e.target.value);
  };

  const handlePageInputBlur = () => {
    const val = parseInt(pageInputVal, 10);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      setCurrentPage(val);
    } else {
      setPageInputVal(String(currentPage));
    }
  };

  const handlePageInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePageInputBlur();
      e.target.blur();
    }
  };

  const handleDownload = (tx) => {
    console.log(`Downloading invoice for transaction ${tx.txId}`);
    alert(`Downloading receipt for ${tx.name} (${tx.txId})`);
  };

  return (
    <div className="transactions-view">
      {/* Header Info */}
      <div className="transactions-header-row">
        <h1 className="services-header-title">Transactions</h1>
        <p className="transactions-subtitle">See your transactions here.</p>
      </div>

      {/* Toolbar Filters & Search */}
      <div className="transactions-toolbar">
        <div className="transactions-filter-group">
          <button
            className={`transactions-filter-btn ${
              activeFilter === "all" ? "active" : ""
            }`}
            onClick={() => {
              setActiveFilter("all");
              setCurrentPage(1);
            }}
          >
            All
          </button>
          <button
            className={`transactions-filter-btn ${
              activeFilter === "pending" ? "active" : ""
            }`}
            onClick={() => {
              setActiveFilter("pending");
              setCurrentPage(1);
            }}
          >
            Pending
          </button>
          <button
            className={`transactions-filter-btn ${
              activeFilter === "paid" ? "active" : ""
            }`}
            onClick={() => {
              setActiveFilter("paid");
              setCurrentPage(1);
            }}
          >
            Paid
          </button>
        </div>

        <div className="transactions-search-wrapper">
          <Search size={16} />
          <input
            type="text"
            className="transactions-search-input"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Transaction Custom Grid Table */}
      <div className="transactions-table-container">
        <div className="transactions-table-responsive">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Method</th>
                <th>Transaction id</th>
                <th>Status</th>
                <th>Amount</th>
                <th style={{ textAlign: "center", width: "80px" }}>Download</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>
                      <div className="customer-cell">
                        <span className="customer-name">{tx.name}</span>
                        <span className="customer-email">{tx.email}</span>
                      </div>
                    </td>
                    <td>
                      <span className="method-cell">{tx.method}</span>
                    </td>
                    <td>
                      <span className="txid-cell">{tx.txId}</span>
                    </td>
                    <td>
                      <span className={`status-tag ${tx.status}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td>
                      <span className="amount-cell">{tx.amount}</span>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <button
                          className="btn-download-tx"
                          onClick={() => handleDownload(tx)}
                          title="Download Receipt"
                        >
                          <Download size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "30px", color: "rgba(255, 255, 255, 0.4)" }}>
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Table Pagination Controls */}
      <div className="transactions-pagination">
        <span className="pagination-label">Page</span>
        <input
          type="number"
          className="pagination-input"
          value={pageInputVal}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
          onKeyDown={handlePageInputKeyDown}
        />
        <span className="pagination-label">of {totalPages}</span>
        <button
          className="btn-pagination-nav"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          title="Previous Page"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="btn-pagination-nav"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          title="Next Page"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Transactions;
