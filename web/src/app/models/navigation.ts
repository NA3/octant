// Copyright (c) 2019 VMware, Inc. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//

export interface NavigationChild {
  title: string;
  path: string;
  children?: NavigationChild[];
}

export interface Navigation {
  sections: NavigationChild[];
}
