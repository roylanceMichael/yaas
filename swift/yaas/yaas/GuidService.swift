//
//  GuidService.swift
//  yaas
//
//  Created by Mike Roylance on 7/14/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import Foundation

class GuidService: IGuidService {
    func generate()->String {
        return NSUUID().UUIDString
    }
}