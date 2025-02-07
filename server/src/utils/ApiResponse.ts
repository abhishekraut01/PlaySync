class ApiResponse<T> {
    public success: boolean;
    public statusCode: number;
    public message: string;
    public data?: T; // Generic type for flexible data handling
  
    constructor(statusCode: number, message: string, data?: T) {
      this.success = statusCode >= 200 && statusCode < 300; // True for 2xx responses
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
    }
  }
  
  export default ApiResponse;
  