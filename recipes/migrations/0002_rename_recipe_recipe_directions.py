# Generated by Django 4.0.2 on 2022-02-09 12:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='recipe',
            new_name='directions',
        ),
    ]
