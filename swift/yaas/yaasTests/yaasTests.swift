//
//  yaasTests.swift
//  yaasTests
//
//  Created by Mike Roylance on 7/13/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import XCTest
@testable import yaas

class yaasTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // arrange
        let urlService = UrlService(baseUrl: "http://localhost:8080")
        let httpExecuteService = HttpExecuteService()
        let authService = RestAuthenticationService(httpExecuteService: httpExecuteService, urlService: urlService)
        
        let newUser = try! Org.Roylance.Yaas.Models.User().toBuilder()
        newUser.userName = "test@test.com"
        newUser.password = "testing"
        newUser.display = "test"

        let onSuccess = {(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void in
            print(response)
        }
        
        let onError = {(response:Any) -> Void in
            print(response)
        }
        
        // act
         authService.register(try! newUser.build(), onSuccess: onSuccess, onError: onError)
        
        // assert
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        XCTAssertTrue(true)
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measureBlock {
            // Put the code you want to measure the time of here.
        }
    }
    
}
