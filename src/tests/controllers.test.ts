import { Request, Response } from 'express';
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';
import { getHomePage } from "../server/controllers/html"

describe("Test HTML Router", () => {
  let request: MockRequest<Request>;
  let response: MockResponse<Response>;

  beforeEach(() => {
    response = createResponse();
  });

  test("Should handle request to home page successfully", async () => {
    request = createRequest({
      method: 'GET',
      url: '/',
    });

    const renderSpy = jest.spyOn(response, 'render');

    await getHomePage(request, response);

    expect(renderSpy).toHaveBeenCalledTimes(1);
    expect(renderSpy).toHaveBeenCalledWith("pages/home", { title: "Home Page" });
  });
});
