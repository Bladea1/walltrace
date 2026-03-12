insert into storage.buckets (id, name, public)
values ('artworks', 'artworks', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

drop policy if exists "Public can view artwork images" on storage.objects;
create policy "Public can view artwork images"
on storage.objects
for select
using (bucket_id = 'artworks');

drop policy if exists "Authenticated users can upload artwork images" on storage.objects;
create policy "Authenticated users can upload artwork images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'artworks');

drop policy if exists "Authenticated users can update artwork images" on storage.objects;
create policy "Authenticated users can update artwork images"
on storage.objects
for update
to authenticated
using (bucket_id = 'artworks')
with check (bucket_id = 'artworks');

drop policy if exists "Authenticated users can delete artwork images" on storage.objects;
create policy "Authenticated users can delete artwork images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'artworks');

drop policy if exists "Public can view avatars" on storage.objects;
create policy "Public can view avatars"
on storage.objects
for select
using (bucket_id = 'avatars');

drop policy if exists "Authenticated users can upload avatars" on storage.objects;
create policy "Authenticated users can upload avatars"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'avatars');

drop policy if exists "Authenticated users can update avatars" on storage.objects;
create policy "Authenticated users can update avatars"
on storage.objects
for update
to authenticated
using (bucket_id = 'avatars')
with check (bucket_id = 'avatars');

drop policy if exists "Authenticated users can delete avatars" on storage.objects;
create policy "Authenticated users can delete avatars"
on storage.objects
for delete
to authenticated
using (bucket_id = 'avatars');
