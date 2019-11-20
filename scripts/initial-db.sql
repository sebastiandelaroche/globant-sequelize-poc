INSERT INTO lods
  (id, name, "order", is_default)
VALUES
  ('52d2c44b-5e51-4aff-a7b9-79cb14cbc0fd' ,'LoD 1' ,1 ,false)
  ,('ba2cce06-73d4-48c9-8ef6-fbd40fe040cf' ,'LoD 2' ,2 ,false);

INSERT INTO part_types
  (id, name)
VALUES
  ('3cbe3623-e6d1-4a64-9f41-9d720b44ac83'  ,'Part Type 1')
  ,('ecfe6b7a-d81e-461b-adc9-818b1e4a1351'  ,'Part Type 2');

INSERT INTO parts
  (id, name, "part_id", description, material, system, "custom_fields", "part_type_id")
VALUES
  ('32210d48-1b9f-494f-b2e6-afc67535a638'  ,'Part 1'  ,'Part-Id-0001' ,'Description'  ,'Material'  ,'System' ,'{ "height": 10, "width": 10  }'   ,'3cbe3623-e6d1-4a64-9f41-9d720b44ac83')
  ,('d26838f8-bda9-46d9-a904-25369362a356'  ,'Part 2'  ,'Part-Id-0002' ,'Description'  ,'Material'  ,'System' ,'{ "height": 70, "width": 90  }'   ,'3cbe3623-e6d1-4a64-9f41-9d720b44ac83')
  ,('fabbc9a7-33a1-4043-8f1c-243042ec67f4'  ,'Part 3'  ,'Part-Id-0003' ,'Description'  ,'Material'  ,'System' ,'{ "height": 150, "width": 150  }'   ,'3cbe3623-e6d1-4a64-9f41-9d720b44ac83');

INSERT INTO part_sets
  (id, name)
VALUES
  ('dd4d935d-2280-4547-beb9-20411401d364'  ,'Part Set 1')
  ,('a7b834ac-b745-429c-b733-d0259430c65d'  ,'Part Set 2');

INSERT INTO part_sets_parts
  (part_set_id, part_id)
VALUES
  ('dd4d935d-2280-4547-beb9-20411401d364' ,'32210d48-1b9f-494f-b2e6-afc67535a638')
  ,('dd4d935d-2280-4547-beb9-20411401d364' ,'d26838f8-bda9-46d9-a904-25369362a356')
  ,('a7b834ac-b745-429c-b733-d0259430c65d' ,'32210d48-1b9f-494f-b2e6-afc67535a638')
  ,('a7b834ac-b745-429c-b733-d0259430c65d' ,'d26838f8-bda9-46d9-a904-25369362a356');

INSERT INTO versions
  (id, version_number, created_at, file_urn, preview_urn, "part_id", "lod_id")
VALUES
  ('2b44f086-90e5-466e-a930-2bfe8b911438'  ,1  ,'now()'  ,'http://quark.com/sources/file.txt' ,'http://quark.com/sources/file.txt' ,'32210d48-1b9f-494f-b2e6-afc67535a638'  ,null)
  ,('a57e37fe-5f77-4f5c-a97a-2c31cb75cc3b'  ,1  ,'now()'  ,'http://quark.com/sources/file.txt' ,'http://quark.com/sources/file.txt' ,'d26838f8-bda9-46d9-a904-25369362a356'  ,null)
  ,('a2f46e14-f8e7-4dfd-a1c4-4805fb62871d'  ,1  ,'now()'  ,'http://quark.com/sources/file.txt' ,'http://quark.com/sources/file.txt' ,'fabbc9a7-33a1-4043-8f1c-243042ec67f4'  ,null)
  ,('f98a11aa-b6b4-41d5-8754-81bcf79a7974'  ,1  ,'now()'  ,'http://quark.com/sources/file.txt' ,'http://quark.com/sources/file.txt' ,null  ,'52d2c44b-5e51-4aff-a7b9-79cb14cbc0fd')
  ,('faf2a6dc-ef30-46b9-a9fc-623fbbd7a0c4'  ,1  ,'now()'  ,'http://quark.com/sources/file.txt' ,'http://quark.com/sources/file.txt' ,null  ,'ba2cce06-73d4-48c9-8ef6-fbd40fe040cf');
