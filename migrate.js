var User = require('./src/user');

var migrate = module.exports = {}

var DataProvider = {}

var users = []

DataProvider.add = function(name, email, password, salt, username) {
  users.push({
    fullname: name,
    email: email,
    hashedPassword: password,
    salt: salt,
    username: username
  });
}

DataProvider.add('long',   'long@seespace.co',    '99010aa5e4a8400a9f1124480a46a2dcfbf8d5156d6b5b11f9f029c3e5825849',    'ea98f00b7dd9cbcc76f1a7d019a0ce88',   'long');
DataProvider.add('john',   'aumkara@gmail.com',  'bfb5fb0f7dd1e8f0171ce6bae1630a3cb61bb273f81d4ab34dfa7ce90caecf7c',   '5de681ba283bcbed0b403d3c625bbdfe',   'aumkara');
DataProvider.add('Mark Weinmann',    'weinmann.mark@gmail.com',  'e914a0d4c0fe00c00e5cd2e2b0775688d65113254978c564435bf5e618a92775',   'c71cf610a271efe3868631ba5d85f119',   'mark');
DataProvider.add('Linh',   'linh@seespace.co',    'f852556f4176b4078cf6284584c9ce2f7df9db8c24b08c132988f0491b5aa950',    'c223f68260933dad10a88618c2200b03',   'linh');
DataProvider.add('Long Ly Hoang',    'longlyhoang90@gmail.com',  '7feef1e7733d23db3b89813b72d6da5f281a67999a7821c1502029cc7c0aec8f',   '64e61903ae460ef0ef77351793533827',   'longlyhoang90');
DataProvider.add('Nhan Dang',    'nhan@seespace.co',    'a829f783e01440f6f6830f7a76442d874a419f2a3370a835e7aaba0a98ebcff7',    'cfc5d374f1a79e03836eb3bdf7bf731a',   'nhandang');
DataProvider.add('Long Ly',    'longly@seespace.co',    'a280e6d3826e4f369b13d54efe9b9f2976404aed066a2b204e303f59705415e0',    '1b4ef2bd7b5549d4a9fcfe51483ca294',    'longly');
DataProvider.add('Clayton',    'cjrieck123@gmail.com',    '9400bdc9585938d0a12e92af6aa8cebf82906ab7e8e05571f7eee71b9a65fa7f',    '435204d76294e06ab0e968e953120d02',    'cjrieck');
DataProvider.add('Ed Pallay',    'epallay@mac.com',  'c818647781aefe192bb470204b45e3bae7dde42474297ebe4a15350f8de25cad',   'd1e8f6e998eee8f123e0b6cc7752916b',   'epallay');
DataProvider.add('naheem',   'naheem@kapdiagnostics.com',  'b842563bd7e85e4a15ae8a8406d4d0a4c6461e2ca7ba707f0f02a0bd2d757ebc',   '6679efa1f09ba463bb6dc3454a958dfb',    'naheem');
DataProvider.add('Quang Mai Duy',    'quangmd@biaki.com',  '6f5313b96d8f5ebdc12d3637c0fb1e6b99ca4b75ec7562ad57d4228749db7a97',   '347a78277e52a32f78fb24a3c3e47351',   'quang_mai_duy');
DataProvider.add('Alexander Thoukydides',    'alex@thouky.co.uk',  'c480c6f0b7ff36b96d4352297cae90fe81e80a48ffbdc4ec6da570f4c98ab655',   '59f3d8ec1ab8fc02099359193d20dd15',   'thouky');
DataProvider.add('Tyler',    'singingsmith23@yahoo.com',    '12e626a22051eeed6836e0fb019badcdd2536ba06750e9abb06552c7b343c030',    '643e4799e75bc4873c7cd1f7613c45f6',    'kamith');
DataProvider.add('William',    'willb@yeeehah.com',  '4fc61fb06713e2f55af1c73b1a2e387379b9ffd08b22b167e618cd921e54759b',   '61fec2f3f8469fd1fd795dd196635bfc',    'yeeehah');
DataProvider.add('Joey',   'joeydebruyn@hotmail.com',  '5f71a3a6b2926290950d4b9c4ada677673f0674d5c087d89c49f2166289795b1',   '0972f9fc8ad10540e750d456e42e7535',   'jdb');
DataProvider.add('glennf',   'gfranxman@gmail.com',  '84827cea252dd9db6035306448ed1c7fc888f22a43550099cc9d8043cc3deac5',   'bd14522854a81b4e7e23a6670992446e',    'gfranxman');
DataProvider.add('binly',    'tai@seespace.co',  '7625552f740a5a6c5ead52cb6a3c697a8d9897f55ee73fa2c66c15c28be8b441',   'f8adbaf6440dfe0b22f073b77842f6ef',   'binly');
DataProvider.add('Roger',    'Goshawk1@comcast.net',    'c8645dcb84e10f7583f51f245cbb6ecc7272e82a46633e2e681e7044640e5326',    '5532e348c7f946924119b67af0ef18d4',   'goshawk');
DataProvider.add('Jamie Wilson',   'utkjamie@gmail.com',    'e9e4ca68163ad689a8c233115e568ba55994f17123eae8aa281466feb0e5ab53',    '438a830ba17d62fd0f1c15cce05ddcbf',    'jamie');
DataProvider.add('anne marie roussel',   'annemarie@seespace.co',  'cd1a9e37d4e9989ee203cf2c59b2351fc7708c713de08bdc664232634adaf82b',   'baf29d945d6fc655435837a46d2eda5b',   'amr');
DataProvider.add('Gigi Johnson',    'gigi@maremel.com',    '011826ff03713d0b091a181168b5ed176aac736fc365b9bdbb55bae89d744a3a',    '2d652c3bfc7132d2c0879536774c2200',   'maremel');
DataProvider.add('Yang Liang',   'leonyounggod@msn.com',    'b8771975b210c7ba73aadd08790bd82ac582fdcf43b1da4d10a824ecebaef309',    'f93a0a95d1421c5c8d222b8659361399',   'classic_leon');
DataProvider.add('Quang Mai Duy',    'duyquang@seespace.co',    'abe9cd5acae635cee56be97450bd84325014f4890c694c2ccf9ce2176dffbe1c',    'f10d6bcc4a28dcd738e308a54bcec975',   'quangmd');
DataProvider.add('Ed Crump',   'ed.crump@gmail.com',    '247a0137d039b68294b04212ab8b94ac081f3bde091be5ea3ac32e2c4a38e77d',    'b11bfed3035486495f33845cbb08a52c',   'icedawn');
DataProvider.add('Tim Woods Design',   'tim@timwoodsdesign.com',    '37f90ae73aae7f5720222503f652b208640c9d66da37db66b30ed1bed0249a75',    '8e905a64109accb7726bb33637946770',    'timwoodsdesign');
DataProvider.add('Tong Zou',   'xitongzou@gmail.com',  '330c0a8d182912338e3dfdbdc5609ad7f199260e088b5e507eadc5b7a6bab171',   '15752a2853787fb6bd959b1f2e3d2248',   'xitongzou');
DataProvider.add('Carlos A Petry',   'ca.petry@hotmail.com',    '2fe5d8ba4ce5de9afcdfdea7af7363a0f9b8cb21f3d704711959b1e836c79b44',    'e25dd80b4acf58cf01ccefa496c374a7',   'capetry');
DataProvider.add('Rick Davis',   'rick.e.davis@gmail.com',    '6792368052fa7ef342fe2b787d10f45b9748af07945997e66177a7cc614bb4c7',    '37d835548f90a2cc1d3819d83ce4d0ad',   'rickedavis');
DataProvider.add('Gutem',    'gutemhc@gmail.com',  'a840ab5202afe8d8a671b1e26b1251bda5e4feee927433eaa7a72734b2bf4f9a',   'e08c881be75a940105ce9cf2b2e480af',    'gutem');

migrate.start = function () {
  for (var i = 0; i < users.length; i++) {
    var userData = users[i];

    User.create(userData, function(err, uid) {
      if (err) {
        console.log(err);
      } else {
        console.log("Done: " + uid);
      }
    })
  };
  
}