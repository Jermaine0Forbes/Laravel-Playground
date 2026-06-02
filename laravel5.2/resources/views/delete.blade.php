@extends('structure')

@section('title', 'Cookies for sale')

@section('content')
    <section class="container">
        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>

        <h2 >Delete Some Shit</h2>
        <form class="form"  method="post">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="form-group">
                <select class="form-control col-md-5" name="cook_id">
                    @foreach($cookie as $c)
                        <option value="{{$c->cook_id}}">{{$c->name}}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <input class="btn btn-primary" type="submit"  value="submit">
            </div>
        </form>
    </section>




@endsection
