import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
   
    console.error("ErrorBoundary caught an error:", {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
    });
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            backgroundColor: "#1a1a2e",
            color: "#ff4d4d",
            padding: "2rem",
            margin: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Something Went Wrong</h2>
          <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            An unexpected error occurred: {this.state.error?.message || "Unknown error"}
          </p>
          {this.state.errorInfo && (
            <details style={{ textAlign: "left", marginBottom: "1rem" }}>
              <summary style={{ cursor: "pointer", color: "#61dafb" }}>
                Error Details
              </summary>
              <pre
                style={{
                  backgroundColor: "#2a2a3e",
                  padding: "1rem",
                  borderRadius: "4px",
                  overflowX: "auto",
                  fontSize: "0.9rem",
                }}
              >
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={this.handleReset}
            style={{
              backgroundColor: "#61dafb",
              color: "#1a1a2e",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4db8db")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#61dafb")}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;